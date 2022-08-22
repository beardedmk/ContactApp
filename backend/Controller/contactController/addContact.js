const Contact = require("../../Model/contacts/ContactSchema");

const addNewContact = async (req, res, next) => {
  const userId = req.params.uid;
  const { name, mobile, email } = req.body;

  try {
    let newContact = new Contact({
      userId,
      name,
      mobile,
      email,
    });
    const contact = await Contact.create(newContact);
    return res
      .status(201)
      .json({ Message: "Successfully added new Contact", contact });
  } catch (error) {
    return next(error);
  }
};
exports.addNewContact = addNewContact;
