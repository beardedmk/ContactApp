const express = require("express");
const { addNewContact } = require("../Controller/contactController/addContact");
const {
  deleteAllContact,
} = require("../Controller/contactController/deleteAllContact");
const {
  deleteContact,
} = require("../Controller/contactController/deleteContact");
const { getAllContact } = require("../Controller/contactController/getContact");
const {
  updateContact,
} = require("../Controller/contactController/UpdateContact");
const { addNewUser } = require("../Controller/userController/addNewUser");
const { deleteUser } = require("../Controller/userController/deleteUser");
const { getAllUsers } = require("../Controller/userController/getAllUsers");
const { updateUser } = require("../Controller/userController/updateUser");

const router = express.Router();

router.get("/allusers", getAllUsers);
router.post("/adduser", addNewUser);
router.put("/:id", updateUser);
router.delete("/user/:id", deleteUser);

// Contact Routes

router.post("/addContact/:uid", addNewContact);
router.delete("/contact/:id", deleteContact);
router.get("/getallcontacts", getAllContact);
router.put("/update/:id", updateContact);
router.delete("/contact/deleteall/:id", deleteAllContact);
module.exports = router;
