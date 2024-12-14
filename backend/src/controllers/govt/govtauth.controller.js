const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
//local imports
const { ApiError } = require("../../utils/customErrorHandler");
const ResponseHandler = require("../../utils/responseHandler");
const asyncHandler = require("../../utils/asyncHandler");
const Govt = require("../../models/govt.model");
const Otp = require("../../models/otp.model");

//access token refresh token generating utility method
const generateTokens = async (govtId) => {
  try {
    const govt = await Govt.findById(govtId);
    const accessToken = govt.generateAccessToken();
    const refreshToken = govt.generateRefreshToken();

    govt.refreshToken = refreshToken;
    await govt.save({ validateBeforeSave: false });
    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(500, "Access token, Refresh token generating failed !");
  }
};

//send otp to email
const sendEmailVerificationOTP = async ({ _id, email }) => {
  try {
    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate a 6-digit OTP
    const expiresAt = Date.now() + 10 * 60 * 1000; // OTP expires in 2 minutes

    // Save OTP in the database
    const newOtp = new Otp({
      userId: _id,
      userType: "govt",
      otp,
      expiresAt,
    });
    await newOtp.save();

    // Send OTP via email using nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // sender email
        pass: process.env.EMAIL_PASS, // sender password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "AYUSH Startup Registration Portal OTP Code",
      html: `<p>Your OTP code is <b>${otp}</b>. It expires in 10 minutes.</p>`,
    };

    const sentMail = await transporter.sendMail(mailOptions);

    if (!sentMail) {
      throw new ApiError(500, "Failed to send OTP !");
    }

    console.log("OTP sent successfully !");
  } catch (error) {
    throw new ApiError(500, "Something went wrong ! Resend OTP !");
  }
};

//login govt
const loginGovt = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  //checking if any field is unfilled
  if (!username || !password) {
    throw new ApiError(400, "All fields are required !");
  }

  //checking if the govt exists or not
  const govt = await Govt.findOne({ username });
  if (!govt) {
    throw new ApiError(409, "User not exists ! Please register !");
  }

  //checking if given password is valid
  const isPasswordValid = await govt.isValidPassword(password);
  if (!isPasswordValid) {
    throw new ApiError(409, "Invalid login credentials");
  }

  try {
    await sendEmailVerificationOTP({ _id: govt._id, email: govt.email });
    res.json({
      status: 201,
      message: "OTP sent to email successfully !",
      response: { _id: govt._id },
    });
  } catch (error) {
    res.json({
      status: 500,
      message: error?.message || "OTP send failed ! Try Again !",
    });
  }

  // //generate tokens
  // const { accessToken, refreshToken } = await generateTokens(govt._id);

  // //fetching logged in govt
  // const loggedInGovt = await Govt.findById(govt._id).select(
  //   "-password -refreshToken"
  // );

  // //configuring cookie options
  // const options = {
  //   httpOnly: true,
  //   secure: false,
  //   expires: new Date(Date.now() + 60 * 60 * 24 * 1000),
  // };

  // return res
  //   .status(200)
  //   .cookie("accessToken", accessToken, options)
  //   .cookie("refreshToken", refreshToken, options)
  //   .json(
  //     new ResponseHandler(201, "Admin logged in successfully", loggedInGovt)
  //   );
});

//logout govt
const logoutGovt = asyncHandler(async (req, res) => {
  await Govt.findByIdAndUpdate(
    req.govt._id,
    {
      $unset: {
        refreshToken: 1,
      },
    },
    {
      new: true,
    }
  );

  const options = {
    httpOnly: true,
    secure: false,
  };

  return res
    .status(200)
    .clearCookie("govtAccessToken", options)
    .clearCookie("govtRefreshToken", options)
    .json(new ResponseHandler(200, "Govt user logged Out", {}));
});

//refresh access token
const refreshAccessToken = asyncHandler(async (req, res) => {
  try {
    const incomingRefreshToken =
      req.cookies?.refreshToken || req.body.refreshToken;

    if (!incomingRefreshToken) {
      throw new ApiError(401, "Unauthorized request");
    }

    //verifiying token
    const decodedToken = jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );

    //finding user
    const govt = await Govt.findById(decodedToken?._id);

    //checking if user exists
    if (!govt) {
      throw new ApiError(401, "Access token not found");
    }

    //checking if both refresh token matches
    if (incomingRefreshToken !== govt.refreshToken) {
      throw new ApiError(401, "Invalid access token");
    }

    //generate new tokens
    const { accessToken, refreshToken } = await generateTokens(user._id);

    const options = {
      httpOnly: true,
      secure: true,
      expires: new Date(Date.now() + 60 * 60 * 24 * 1000),
    };

    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json(new ResponseHandler(201, "Access token refreshed successfully"));
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid refresh token");
  }
});

//change govt password
const changeGovtPassword = asyncHandler(async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  //checking if govt entered existing password correct
  const govt = await Govt.findOne(req.govt?._id);
  const isPasswordValid = await govt.isValidPassword(oldPassword);

  if (!isPasswordValid) {
    throw new ApiError(400, "Invalid old password");
  }

  govt.password = newPassword;
  govt.save({ validateBeforeSave: false });

  return res
    .status(200)
    .json(new ResponseHandler(200, "Password changed successfully"));
});

module.exports = {
  loginGovt,
  logoutGovt,
  refreshAccessToken,
  changeGovtPassword,
};
