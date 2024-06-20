const User = require("../model/user.model");

const userRepository = {
  async getOneUser(email) {
    const user = await User.findOne({ email }).select("-__v ");
    return user;
  },
  async getOneUserData(item) {
    const user = await User.findOne(item).select("-__v");
    return user;
  },

  async getUserById(id) {
    const user = await User.findById(id).select("-__v");
    return user;
  },

  async getUsers(query) {
    const user = await User.find(query).select("-__v");
    return user;
  },
  async createUser(createUser) {
    const savedUser = await User.create(createUser);
    const { _id, __v, password, ...data } = savedUser.toObject();
    return data;
  },
  async updateUserData(queryParams, fields) {
    return User.updateOne(fields, {
      $set: queryParams,
    });
  },
};

module.exports = {
  userRepository,
};
