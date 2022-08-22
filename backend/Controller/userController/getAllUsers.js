const User = require("../../Model/users/UserSchema");

const getAllUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
    if (users) {
      return res.status(200).json({ users });
    } else {
      return res.status(500).json({ message: "No Users Found" });
    }
  } catch (error) {
    return next(error);
  }
};

exports.getAllUsers = getAllUsers;
