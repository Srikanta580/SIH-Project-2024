const express = require("express");
const router = express.Router();
const {
  loginAdmin,
  logoutAdmin,
  changeAdminPassword,
  addAdmin,
} = require("../controllers/admin/adminauth.controller");
const {
  addGovt,
} = require("../controllers/admin/govtManagement.controller.js");
const authHandler = require("../middlewares/authHandler.js");
const { verifyEmailOTP } = require("../utils/verifyEmailOTP.js");

//authentication
router.route("/add-admin").post(addAdmin);
router.route("/admin-login").post(loginAdmin);
router.route("/admin-login/email-verify").post(verifyEmailOTP);
router
  .route("/admin-logout")
  .post(authHandler({ userType: "admin" }), logoutAdmin);
router
  .route("/admin/reset-admin-password")
  .post(authHandler({ userType: "admin" }), changeAdminPassword);

//user management

//govt management
router
  .route("/admin/add-govt")
  .post(authHandler({ userType: "admin" }), addGovt);

module.exports = router;
