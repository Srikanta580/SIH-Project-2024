const Govt = require("../../models/govt.model");
const asyncHandler = require("../../utils/asyncHandler");
const { ApiError } = require("../../utils/customErrorHandler");
const ResponseHandler = require("../../utils/responseHandler");

//add govt user
const addGovt = asyncHandler(async (req, res) => {
  const { username, email, password, designation, department } = req.body;

  //checking if any field is unfilled
  if (!email || !username || !password || !designation || !department) {
    throw new ApiError(400, "All fields are required !");
  }

  //checking if the govt already exists
  const existingGovt = await Govt.findOne({ email });
  if (existingGovt) {
    throw new ApiError(409, "Govt user already exists");
  }

  //creating new govt
  const govt = await Govt.create({
    username,
    email,
    password,
    designation,
    department,
  });

  //checking if govt is added successfully
  const addedGovt = await Govt.findById(govt._id).select("-password");
  if (!addedGovt) {
    throw new ApiError(500, "Something went wrong!");
  }
  return res
    .status(200)
    .json(new ResponseHandler(201, "Govt registered successfully", addedGovt));
});

//remove govt user

module.exports = {
  addGovt,
};
