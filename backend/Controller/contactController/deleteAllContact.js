const Contact = require("../../Model/contacts/ContactSchema");

const deleteAllContact = async (req, res, next) => {
  const uid = req.params.id;

  const deletedContact = await Contact.deleteMany({ userId: uid });

  //   const deletedContact = await Contact.findByIdAndDelete({ _id: id });

  if (deletedContact) {
    return res
      .status(200)
      .json({ Message: "Contact Deleted Suceesfully", deletedContact });
  } else {
    return console.log(err);
  }
};
exports.deleteAllContact = deleteAllContact;
