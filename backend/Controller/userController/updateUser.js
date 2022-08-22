const User = require("../../Model/users/UserSchema");

const updateUser = async (req, res, next) => {
  const { username, password, name, mobile } = req.body;
  const id = req.params.id;

  try {
    const user = await User.findOneAndUpdate(id, {
      username,
      password,
      name,
      mobile,
    });

    if (user) {
      res.status(203).json({ Message: "Updated Succesfully", user });
    } else {
      res.status(204).json({ Message: "No user found" });
    }
  } catch (error) {
    return next(error);
  }
};
exports.updateUser = updateUser;
