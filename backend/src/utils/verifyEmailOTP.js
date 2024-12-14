const bcrypt = require("bcrypt");
const { NotFoundError, ApiError } = require("./customErrorHandler");
const User = require("../models/user.model");
const Admin = require("../models/admin.model");
const Govt = require("../models/govt.model");
const asyncHandler = require("./asyncHandler");
const EventEmitter = require("events");
const Otp = require("../models/otp.model");
const ResponseHandler = require("./responseHandler");
const bus = new EventEmitter();

bus.setMaxListeners(20); // Increase the limit as needed

//verify email otp
const verifyEmailOTP = asyncHandler(async (req, res) => {
  const { _id, inputOTP } = req.body;
  console.log(_id);
  try {
    if (!_id || !inputOTP) {
      throw new ApiError(500, "All fields are required !");
    }

    const otpDetails = await Otp.findOne({ userId: _id });
    // console.log(otpDetails);
    if (!otpDetails) {
      throw new ApiError(404, "Invalid OTP or email !");
    }

    // checking if given OTP is valid
    const isOTPValid = await bcrypt.compare(inputOTP, otpDetails.otp);
    // console.log(isOTPValid);
    if (!isOTPValid) {
      throw new ApiError(409, "Invalid OTP !");
    }

    // Check if the OTP has expired
    if (otpDetails.expiresAt < Date.now()) {
      throw new ApiError(409, "OTP has expired !");
    }

    const { userType } = otpDetails;

    await Otp.deleteOne({ userId: _id });

    if (userType === "user") {
      const user = await User.findById(_id);
      console.log(user);
      if (!user) {
        throw new NotFoundError("User not found !");
      }

      user.isEmailVerified = true;
      await user.save();

      return res
        .status(200)
        .json(
          new ResponseHandler(201, "Email OTP Verified successfully !", {})
        );
    } else if (userType === "admin") {
      //checking if admin exists
      const admin = await Admin.findById(_id);
      console.log(admin);
      if (!admin) {
        throw new NotFoundError("Admin not found !");
      }

      //generate tokens
      const { accessToken, refreshToken } = await generateTokens(
        userType,
        admin._id
      );

      //fetching logged in admin
      const loggedInAdmin = await Admin.findById(admin._id).select(
        "-password -refreshToken"
      );

      //configuring cookie options
      const options = {
        httpOnly: true,
        secure: false,
        expires: new Date(Date.now() + 60 * 60 * 24 * 1000),
      };

      return res
        .status(200)
        .cookie("adminAccessToken", accessToken, options)
        .cookie("adminRefreshToken", refreshToken, options)
        .json(
          new ResponseHandler(
            201,
            "Email OTP Verified successfully ! Admin logged in !",
            loggedInAdmin
          )
        );
    } else if (userType === "govt") {
      //checking govt exists or not
      const govt = await Govt.findById(_id);
      console.log(govt);
      if (!govt) {
        throw new NotFoundError("Govt User not found !");
      }

      //generate tokens
      const { accessToken, refreshToken } = await generateTokens(
        userType,
        govt._id
      );

      //fetching logged in govt
      const loggedInGovt = await Govt.findById(govt._id).select(
        "-password -refreshToken"
      );

      //configuring cookie options
      const options = {
        httpOnly: true,
        secure: false,
        expires: new Date(Date.now() + 60 * 60 * 24 * 1000),
      };

      return res
        .status(200)
        .cookie("govtAccessToken", accessToken, options)
        .cookie("govtRefreshToken", refreshToken, options)
        .json(
          new ResponseHandler(
            201,
            "Email OTP Verified successfully ! Govt logged in !",
            loggedInGovt
          )
        );
    } else {
      throw new ApiError(500, "User Type Error !");
    }
    // return res
    //   .status(200)
    //   .json(new ResponseHandler(201, "Email OTP Verified successfully !", {}));
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong ! Email OTP Verification failed !"
    );
  }
});

//access token refresh token generating utility method
const generateTokens = async (userType, userId) => {
  try {
    if (userType === "admin") {
      const admin = await Admin.findById(userId);
      const accessToken = admin.generateAccessToken();
      const refreshToken = admin.generateRefreshToken();

      admin.refreshToken = refreshToken;
      await admin.save({ validateBeforeSave: false });
      return { accessToken, refreshToken };
    } else if (userType === "govt") {
      const govt = await Govt.findById(userId);
      const accessToken = govt.generateAccessToken();
      const refreshToken = govt.generateRefreshToken();

      govt.refreshToken = refreshToken;
      await govt.save({ validateBeforeSave: false });
      return { accessToken, refreshToken };
    } else {
      throw new NotFoundError("User type not found !");
    }
  } catch (error) {
    throw new ApiError(500, "Access token, Refresh token generating failed !");
  }
};

module.exports = {
  verifyEmailOTP,
};
