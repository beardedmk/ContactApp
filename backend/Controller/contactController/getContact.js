const Contact = require("../../Model/contacts/ContactSchema");

const getAllContact = async (req, res, next) => {
  let allContacts;
  try {
    allContacts = await Contact.find().sort({ name: 1 });

    if (allContacts) {
      res.status(200).json({ allContacts });
    } else {
      return res.status(500).json({ message: "No Contatc Found" });
    }
  } catch (error) {
    return next(error);
  }
};

exports.getAllContact = getAllContact;
