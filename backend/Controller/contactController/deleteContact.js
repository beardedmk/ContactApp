const Contact = require("../../Model/contacts/ContactSchema");

const deleteContact = async (req, res, next) => {
  const id = req.params.id;

  //   const deletedContact = await Contact.deleteOne({ _id: id });

  const deletedContact = await Contact.findOneAndDelete({ _id: id });

  if (deletedContact) {
    return res
      .status(200)
      .json({ Message: "Contact Deleted Suceesfully", deletedContact });
  } else {
    return console.log(err);
  }
};
exports.deleteContact = deleteContact;
