const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
//local imports
const { ApiError } = require("../../utils/customErrorHandler");
const ResponseHandler = require("../../utils/responseHandler");
const asyncHandler = require("../../utils/asyncHandler");
const Admin = require("../../models/admin.model");
const Otp = require("../../models/otp.model");

//access token refresh token generating utility method
const generateTokens = async (adminId) => {
  try {
    const admin = await Admin.findById(adminId);
    const accessToken = admin.generateAccessToken();
    const refreshToken = admin.generateRefreshToken();

    admin.refreshToken = refreshToken;
    await admin.save({ validateBeforeSave: false });
    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(500, "Access token, Refresh token generating failed !");
  }
};

//add admin
const addAdmin = asyncHandler(async (req, res) => {
  const { username, roles, permissions, email, password } = req.body;

  //checking if any field is unfilled
  if (!email || !username || !password || !roles || !permissions) {
    throw new ApiError(400, "All fields are required !");
  }

  //checking if the admin already exists
  const existingAdmin = await Admin.findOne({ email });
  if (existingAdmin) {
    throw new ApiError(409, "Admin already exists");
  }

  //creating new admin
  const admin = await Admin.create({
    username,
    email,
    password,
    roles,
    permissions,
  });

  //checking if admin is added successfully
  const addedAdmin = await Admin.findById(admin._id).select(
    "-roles -permissions -password"
  );
  if (!addedAdmin) {
    throw new ApiError(500, "Something went wrong!");
  }
  return res
    .status(200)
    .json(
      new ResponseHandler(201, "Admin registered successfully", addedAdmin)
    );
});

//send otp to email
const sendEmailVerificationOTP = async ({ _id, email }) => {
  try {
    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate a 6-digit OTP
    const expiresAt = Date.now() + 10 * 60 * 1000; // OTP expires in 2 minutes

    // Save OTP in the database
    const newOtp = new Otp({
      userId: _id,
      userType: "admin",
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

//login admin
const loginAdmin = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  //checking if any field is unfilled
  if (!username || !password) {
    throw new ApiError(400, "All fields are required !");
  }

  //checking if the admin exists or not
  const admin = await Admin.findOne({ username });
  if (!admin) {
    throw new ApiError(409, "User not exists ! Please register !");
  }

  //checking if given password is valid
  const isPasswordValid = await admin.isValidPassword(password);
  if (!isPasswordValid) {
    throw new ApiError(409, "Invalid login credentials");
  }

  try {
    await sendEmailVerificationOTP({ _id: admin._id, email: admin.email });
    res.json({
      status: 201,
      message: "OTP sent to email successfully !",
      response: { _id: admin._id },
    });
  } catch (error) {
    res.json({
      status: 500,
      message: error?.message || "OTP send failed ! Try Again !",
    });
  }

  // //generate tokens
  // const { accessToken, refreshToken } = await generateTokens(admin._id);

  // //fetching logged in admin
  // const loggedInAdmin = await Admin.findById(admin._id).select(
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
  //     new ResponseHandler(201, "Admin logged in successfully", loggedInAdmin)
  //   );
});

//logout admin
const logoutAdmin = asyncHandler(async (req, res) => {
  await Admin.findByIdAndUpdate(
    req.admin._id,
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
    .clearCookie("adminAccessToken", options)
    .clearCookie("adminRefreshToken", options)
    .json(new ResponseHandler(200, "Admin logged Out", {}));
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

    //finding admin
    const admin = await Admin.findById(decodedToken?._id);

    //checking if user exists
    if (!admin) {
      throw new ApiError(401, "Access token not found");
    }

    //checking if both refresh token matches
    if (incomingRefreshToken !== admin.refreshToken) {
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

//change admin password
const changeAdminPassword = asyncHandler(async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  //checking if admin entered existing password correct
  const admin = await Admin.findOne(req.admin?._id);
  const isPasswordValid = await admin.isValidPassword(oldPassword);

  if (!isPasswordValid) {
    throw new ApiError(400, "Invalid old password");
  }

  admin.password = newPassword;
  admin.save({ validateBeforeSave: false });

  return res
    .status(200)
    .json(new ResponseHandler(200, "Password changed successfully"));
});

module.exports = {
  addAdmin,
  loginAdmin,
  logoutAdmin,
  refreshAccessToken,
  changeAdminPassword,
};
