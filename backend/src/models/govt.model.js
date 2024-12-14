const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validator = require("validator");

const govtSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Enter govt username"],
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
    designation: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    refreshToken: { type: String },
  },
  { timestamps: true }
);

govtSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

//password validity checking method
govtSchema.methods.isValidPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

//access token generating method
govtSchema.methods.generateAccessToken = function () {
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
govtSchema.methods.generateRefreshToken = function () {
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

const Govt = mongoose.model("Govt", govtSchema);
module.exports = Govt;
