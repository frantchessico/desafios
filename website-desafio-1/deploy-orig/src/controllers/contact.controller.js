const ContactModel = require('../models/Contact.model');
const spValidate = require('sp-validate')


export  const ContactController = {
   async receiveDatasForm(req, res) {
         const { 
             firstName, 
             lastName, 
             email,
             phoneNumber,
             company,
             role,
             message
             
         } = req.body;
let errors = {};




if(spValidate.isLength(firstName, 3)) {
    errors.firstName = 'Your FirstName is very short'
}

if(spValidate.isEmpty(firstName)) {
    errors.firstName = 'FirstName must not be empty'
}



if(spValidate.isLength(lastName,3)) {
    errors.lastName = 'Your lastName is very short'
}

if(spValidate.isEmpty(lastName)) {
    errors.lastName = 'lastName must not be empty'
}


if(!spValidate.isEmail(email)) {
    errors.email = 'email must be valid'
}



if(spValidate.isLength(email)) {
    errors.email = 'Your email is very short'
}

if(spValidate.isEmpty(email)) {
    errors.email = 'email must not be empty'
}


if(spValidate.isLength(company, 3)) {
    errors.company = 'Your company is very short'
}

if(spValidate.isEmpty(company)) {
    errors.company = 'company must not be empty'
}


if(spValidate.isLength(role, 3)) {
    errors.role = 'Your role is very short'
}

if(spValidate.isEmpty(role)) {
    errors.role = 'role must not be empty'
}


if(spValidate.isLength(message, 100)) {
    errors.message = 'Your message is very short'
}

if(spValidate.isEmpty(message)) {
    errors.message = 'message must not be empty'
}

if(spValidate.isPhone(phoneNumber)) {
    errors.phoneNumber = 'Your phoneNumber must be valid'
}

if(spValidate.isLength(phoneNumber, 9)) {
    errors.phoneNumber = 'Your phoneNumber is very short'
}

if(spValidate.isEmpty(phoneNumber)) {
    errors.phoneNumber = 'phoneNumber must not be empty'
}

if(Object.keys(errors).length > 0 ) {
    return res.json(errors)
}


         const contact = new ContactModel({
            firstName, 
            lastName, 
            email,
            phoneNumber,
            company,
            role,
            message
         });

       await contact.save()
       .then(data => {
           return res.json(data)
       }).catch(err => {
           return res.json(err)
       })
    }
}