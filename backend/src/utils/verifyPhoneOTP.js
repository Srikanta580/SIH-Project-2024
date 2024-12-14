const bcrypt = require("bcrypt");
const { NotFoundError, ApiError } = require("./customErrorHandler");
const User = require("../models/user.model");
const asyncHandler = require("./asyncHandler");
const EventEmitter = require("events");
const Otp = require("../models/otp.model");
const ResponseHandler = require("./responseHandler");
const bus = new EventEmitter();

bus.setMaxListeners(20); // Increase the limit as needed

//verify email otp
const verifyPhoneOTP = ({ authType }) => {
  return asyncHandler(async (req, res, next) => {
    const { _id, inputOTP } = req.body;
    console.log(_id);
    try {
      if (!_id || !inputOTP) {
        throw new ApiError(500, "All fields are required !");
      }

      const otpDetails = await Otp.findOne({ userId: _id });
      console.log(otpDetails);
      if (!otpDetails) {
        throw new ApiError(404, "Invalid OTP or phone !");
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

      const user = await User.findById(_id);
      console.log(user);
      if (!user) {
        throw new NotFoundError("User not found !");
      }

      await Otp.deleteOne({ userId: _id });

      console.log(authType);

      if (authType === "registration") {
        user.isPhoneVerified = true;
        user.isProfileComplete = true;
        await user.save();

        return res
          .status(200)
          .json(
            new ResponseHandler(201, "Phone OTP Verified successfully !", {})
          );
      } else if (authType === "login") {
        //generate tokens
        const { accessToken, refreshToken } = await generateTokens(user._id);

        console.log(accessToken);

        //fetching logged in user
        const loggedInUser = await User.findById(user._id).select(
          "-password -refreshToken"
        );

        console.log(loggedInUser);

        //configuring cookie options
        const options = {
          httpOnly: true,
          secure: false,
          expires: new Date(Date.now() + 60 * 60 * 24 * 1000),
        };

        return res
          .status(200)
          .cookie("userAccessToken", accessToken, options)
          .cookie("userRefreshToken", refreshToken, options)
          .json(
            new ResponseHandler(
              201,
              "Phone OTP verified successfully ! User logged in !",
              loggedInUser
            )
          );
      } else {
        throw new NotFoundError("Authtype not found !");
      }
    } catch (error) {
      return next(
        new ApiError(
          500,
          "Something went wrong ! Phone OTP Verification failed !"
        )
      );
    }
  });
};

//access token refresh token generating utility method
const generateTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });
    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(500, "Access token, Refresh token generating failed !");
  }
};

module.exports = {
  verifyPhoneOTP,
};
