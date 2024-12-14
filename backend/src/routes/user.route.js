const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  logoutUser,
  addPhone,
  loginUserWithOTP,
} = require("../controllers/user/userauth.controller");
const { verifyEmailOTP } = require("../utils/verifyEmailOTP.js");
const { verifyPhoneOTP } = require("../utils/verifyPhoneOTP.js");
const authHandler = require("../middlewares/authHandler.js");

router.route("/user-register").post(registerUser);
router.route("/user/email-verify").post(verifyEmailOTP);
router.route("/user/add-phone").post(addPhone);
router
  .route("/user/phone-verify")
  .post(verifyPhoneOTP({ authType: "registration" }));
router.route("/user-login").post(loginUser);
router.route("/user-login-phone").post(loginUserWithOTP);
router
  .route("/user-login-phone/verify-phone")
  .post(verifyPhoneOTP({ authType: "login" }));
router
  .route("/user-logout")
  .post(authHandler({ userType: "user" }), logoutUser);

module.exports = router;
