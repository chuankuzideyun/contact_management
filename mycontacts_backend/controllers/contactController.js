//Get all contacts
const getContacts = (req,res)=>{
    res.status(200).json({message: "Get all contacts."});
};

//Create contact
const createContact = (req,res)=>{
    console.log("The request body is:", req.body);
    const{name,email,phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory!")
    }
    res.status(200).json({message: "Create contact."});
};

//Get all contacts
const getContact = (req,res)=>{
    res.status(200).json({message: `Get contac for ${req.params.id}`});
};

//Update contact
const updateContact = (req,res)=>{
    res.status(200).json({message: `Update contac for ${req.params.id}`});
};

//Delete contact
const deleteContact = (req,res)=>{
    res.status(200).json({message: `Delete contac for ${req.params.id}`});
};
module.exports = {getContacts,getContact,createContact,updateContact,deleteContact};