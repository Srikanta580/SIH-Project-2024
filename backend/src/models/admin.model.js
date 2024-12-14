const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validator = require("validator");

const adminSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Enter admin username"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Enter email"],
      unique: true,
      validate: [validator.isEmail, "Enter an valid email"],
    },
    password: {
      type: String,
      required: [true, "Enter password"],
      minLength: [8, "Password must be of at least 8 characters"],
    },
    roles: {
      type: [String],
      enum: ["superAdmin", "systemAdmin", "supportAdmin"], // Admin roles may differ
      required: true,
    },
    permissions: {
      type: [String],
      enum: ["manageOfficials", "viewReports", "manageUsers", "viewAuditLogs"], // Define what the admin can do
      required: true,
    },
    refreshToken: { type: String },
  },
  { timestamps: true }
);

adminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

//password validity checking method
adminSchema.methods.isValidPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

//access token generating method
adminSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      username: this.username,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};

//refresh token generating method
adminSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
};

const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;
