const { userValidation } = require("../validation/user.validation");
const { userService } = require("../service/user.service");
const { ResponseService } = require("../service/reponse.service");

const userController = {
  async register(req, res) {
    const { value, error } = userValidation.create.validate(req.body);
    if (error) return res.status(400).send({ error: error.details[0].message });
    const data = await userService.createUser(value);
    return ResponseService.success(
      res,
      "Welcome! You have successfully signed up. Proceed to login",
      data
    );
  },

  async login(req, res) {
    const { value, error } = userValidation.login.validate(req.body);
    if (error) return res.status(400).send({ error: error.details[0].message });
    const { email } = value;
    const { token, refreshToken, ...user } = await userService.loginUser(
      value
    );
    res.header("authorization", token);
    const data = { email, token, ...user };
    return ResponseService.success(res, "Login Successful", data);
  },

  async dashboard(req, res) {
    const userId = req.user.id
    const { password,  ...user } = await userService.getUser(
     userId
    );
  
    return ResponseService.success(res, "User Details", user);
  },
};

module.exports = { userController };
