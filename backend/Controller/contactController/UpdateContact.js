const Contact = require("../../Model/contacts/ContactSchema");

const updateContact = async (req, res, next) => {
  const { name, mobile, email } = req.body;

  const id = req.params.id;

  try {
    const contact = await Contact.findOneAndUpdate(id, {
      name,
      mobile,
      email,
    });

    if (contact) {
      res.status(203).json({ Message: "Updated Succesfully", contact });
    } else {
      res.status(204).json({ Message: "No user found" });
    }
  } catch (error) {
    return next(error);
  }
};
exports.updateContact = updateContact;
