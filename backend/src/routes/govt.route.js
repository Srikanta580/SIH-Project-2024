const express = require("express");
const router = express.Router();
const {
  loginGovt,
  logoutGovt,
} = require("../controllers/govt/govtauth.controller");
const authHandler = require("../middlewares/authHandler.js");
const { verifyEmailOTP } = require("../utils/verifyEmailOTP.js");

router.route("/govt-login").post(loginGovt);
router.route("/govt-login/email-verify").post(verifyEmailOTP);
router
  .route("/govt-logout")
  .post(authHandler({ userType: "govt" }), logoutGovt);

module.exports = router;
