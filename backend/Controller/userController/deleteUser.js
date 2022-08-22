const User = require("../../Model/users/UserSchema");

const deleteUser = async (req, res, next) => {
  const id = req.params.id;

  // const deletedUser = await User.deleteOne({ _id: id });

  const deletedUser = await User.findOneAndDelete({ _id: id });

  if (deletedUser) {
    return res
      .status(200)
      .json({ Message: "User Deleted Suceesfully", deletedUser });
  } else {
    return console.log(err);
  }
};
exports.deleteUser = deleteUser;
