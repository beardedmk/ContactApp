const User = require("../../Model/users/UserSchema");

const addNewUser = async (req, res, next) => {
  const { username, password, name, mobile } = req.body;

  try {
    let newUser = new User({
      username,
      password,
      name,
      mobile,
    });
    const user = await User.create(newUser);
    return res
      .status(201)
      .json({ Message: "successfully added new user", user });
  } catch (error) {
    return next(error);
  }
};
exports.addNewUser = addNewUser;
