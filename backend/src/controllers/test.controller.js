const Admin = require("../models/admin.model");
const Govt = require("../models/govt.model");
const User = require("../models/user.model");
const ResponseHandler = require("../utils/responseHandler");

const getAllUser = async (req, res) => {
  const data = await User.find();

  return res.status(200).json(new ResponseHandler(200, {}, data));
};
const getAllAdmin = async (req, res) => {
  const data = await Admin.find();

  return res.status(200).json(new ResponseHandler(200, {}, data));
};
const getAllGovt = async (req, res) => {
  const data = await Govt.find();

  return res.status(200).json(new ResponseHandler(200, {}, data));
};
const delAllUser = async (req, res) => {
  const data = await User.deleteMany();

  return res.status(200).json(new ResponseHandler(200, {}, data));
};
const delAllAdmin = async (req, res) => {
  const data = await Admin.deleteMany();

  return res.status(200).json(new ResponseHandler(200, {}, data));
};
const delAllGovt = async (req, res) => {
  const data = await Govt.deleteMany();

  return res.status(200).json(new ResponseHandler(200, {}, data));
};
const getUser = async (req, res) => {
  const { email } = req.body;
  const data = await User.findOne({ email });

  return res.status(200).json(new ResponseHandler(200, {}, data));
};
const getAdmin = async (req, res) => {
  const { email } = req.body;
  const data = await Admin.findOne({ email });

  return res.status(200).json(new ResponseHandler(200, {}, data));
};
const getGovt = async (req, res) => {
  const { email } = req.body;
  const data = await Govt.findOne({ email });

  return res.status(200).json(new ResponseHandler(200, {}, data));
};
const delUser = async (req, res) => {
  const { email } = req.body;
  const data = await User.deleteOne({ email });

  return res.status(200).json(new ResponseHandler(200, {}, data));
};
const delAdmin = async (req, res) => {
  const { email } = req.body;
  const data = await Admin.deleteOne({ email });

  return res.status(200).json(new ResponseHandler(200, {}, data));
};
const delGovt = async (req, res) => {
  const { email } = req.body;
  const data = await Govt.deleteOne({ email });

  return res.status(200).json(new ResponseHandler(200, {}, data));
};

module.exports = {
  getUser,
  getAdmin,
  getGovt,
  getAllUser,
  getAllAdmin,
  getAllGovt,
  delAllAdmin,
  delAllUser,
  delAllGovt,
  delUser,
  delAdmin,
  delGovt,
};
