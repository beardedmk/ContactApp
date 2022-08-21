const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minLength: 5,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 5,
  },

  name: {
    type: String,
  },
  mobile: {
    type: Number,
    minLength: 10,
    maxLength: 10,
  },
});

module.exports = mongoose.model("User", userSchema);
