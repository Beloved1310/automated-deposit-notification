const { userRepository } = require("../repository/user.repository");
const bcrypt = require("bcrypt");
const ValidationError = require("../utilis/validation.error");
const ConflictError = require("../utilis/conflict.error");

const userService = {
  async createUser(createUser) {
    const { email } = createUser;
    const user = await userRepository.getOneUser(email);
    if (user)
      throw new ConflictError("User already registered. Proceed to login");
    const salt = await bcrypt.genSalt(10);
    createUser.password = await bcrypt.hash(createUser.password, salt);

    const savedUser = await userRepository.createUser({
      ...createUser,
    });
    if (!savedUser) throw new ValidationError("Unsaved User");
    return savedUser;
  },

  async loginUser(loginUser) {
    const user = await userRepository.getOneUser(loginUser.email);
    if (!user) throw new ValidationError("Username or Password not found");
    const validPassword = await bcrypt.compare(
      loginUser.password,
      user.password
    );
    if (!validPassword)
      throw new ValidationError("Username or Password not found");

    const token = user.generateAuthToken();

    return { token, user };
  },

  async getUser(userId) {
    const user = await userRepository.getUserById(userId);
    if (!user) throw new ValidationError("Username not found");
    return { user };
  },
};

module.exports = {
  userService,
};
