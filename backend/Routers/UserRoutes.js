const express = require("express");
const { getAllUsers, addNewUser } = require("../Controller/getAllUsers");

const router = express.Router();

router.get("/allusers", getAllUsers);
router.post("/adduser", addNewUser);

module.exports = router;
