const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    minLength: 5,
    unique: true,
  },
  mobile: {
    type: Number,
    minLength: 10,
    maxLength: 10,
    required: true,
  },
  email: {
    type: String,
  },
});

module.exports = mongoose.model("Contact", contactSchema);
