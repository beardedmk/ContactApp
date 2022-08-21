const express = require("express");
const mongoose = require("mongoose");
const User = require("../Model/users/UserSchema");

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

exports.getAllUsers = getAllUsers;
exports.addNewUser = addNewUser;
