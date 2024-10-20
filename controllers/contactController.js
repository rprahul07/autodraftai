const errorhandler = require("../middlewares/errorHandler");
const asyncHandler= require("express-async-handler");
const Contact=require("../models/contactModel")



//@desc Get all contacts
//@route GET /api/contacts
//@acess private

const getContacts = asyncHandler(async (req, res) => {
  // Fetch contacts for the logged-in user
  const contacts = await Contact.find({ user_id: req.user.id });
  
  // Respond with the retrieved contacts
  res.status(200).json(contacts);
});
 
//@desc Create contacts
//@route POST /api/contacts
//@acess rivate

const createContact = asyncHandler(async (req, res, next) => {
  console.log(req.body);
  const { name, email, phone_number } = req.body;
  if (!name || !email || !phone_number) {
    res.status(404);
    throw new Error("all fields are mandatory");
  }
  const contact=await Contact.create({
    name,email,phone_number,user_id: req.user.id
  })
  res.status(201).json(contact);


});

//@desc update contacts
//@route Put /api/contacts/:id
//@acessrivate

const updateContact =asyncHandler( async (req, res) => {

  const contact=await Contact.findById(req.params.id);
    if(!contact){
      res.status(404);
      throw new Error("Contact not found");
    };

    if(contact.user_id.toString()!==req.user.id)
    {
      res.status(403);
      throw new Error("User have no right to change another user contact");
    }
  const updatedContact=await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new:true}
  );
 
  res.status(200).json(updatedContact);
});
//@desc get contacts for id
//@route GET /api/contacts/:id
//@acess public

const getContact = asyncHandler( async (req, res) => {
    const contact=await Contact.findById(req.params.id);
    if(!contact){
      res.status(404);
      throw new Error("Contact not found");
    }

  res.status(200).json(contact)});

//@desc delete contacts for id
//@route DELETE /api/contacts/:id
//@acess public

const deleteContact =asyncHandler( async (req, res) => {

  const contact=await Contact.findById(req.params.id);
    if(!contact){
      res.status(404);
      throw new Error("Contact not found");
    };
    if(contact.user_id.toString()!==req.user.id)
      {
        res.status(403);
        throw new Error("User have no right to delete another user contact");
      }
    await Contact.findByIdAndDelete(req.params.id);
  res.status(200).json(contact);
});

module.exports = {
  getContacts,
  createContact,
  updateContact,
  getContact,
  deleteContact,
};
