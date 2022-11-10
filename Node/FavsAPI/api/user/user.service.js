const UserModel = require('./user.model');

const getAllUsers = () => {
  return UserModel.find({});
};

const getUserByEmail = (email) => {
  return UserModel.findOne({email: email});
};

const createUser = (body) => {
  return UserModel.create(body);
};

module.exports = {
  getAllUsers,
  getUserByEmail,
  createUser,
};
