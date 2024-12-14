const jwt = require("jsonwebtoken");
const { ApiError } = require("../utils/customErrorHandler");
const User = require("../models/user.model");
const Admin = require("../models/admin.model");
const asyncHandler = require("../utils/asyncHandler");
const Govt = require("../models/govt.model");

const authHandler = ({ userType }) =>
  asyncHandler(async (req, res, next) => {
    const accessToken = userType + "AccessToken";

    try {
      const token =
        req.cookies?.[accessToken] || req.headers.authorization?.split(" ")[1];

      console.log(token);

      if (!token) {
        throw new ApiError(401, "Unauthorized request! Token not found!");
      }

      //verifying token with jwt
      const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      console.log(decodedToken);

      if (userType === "user") {
        //finding the user
        const user = await User.findById(decodedToken?._id);
        //checking if user exists
        if (!user) {
          throw new ApiError(401, "Invalid access token !");
        }

        req.user = user;
      } else if (userType === "admin") {
        const admin = await Admin.findById(decodedToken?._id);
        //checking if admin exists
        if (!admin) {
          throw new ApiError(401, "Invalid access token !");
        }

        req.admin = admin;
      } else if (userType === "govt") {
        const govt = await Govt.findById(decodedToken?._id);
        //checking if admin exists
        if (!govt) {
          throw new ApiError(401, "Invalid access token !");
        }

        req.govt = govt;
      }

      next();
    } catch (error) {
      throw new ApiError(401, error?.message || "Invalid access token");
    }
  });

module.exports = authHandler;
