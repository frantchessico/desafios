const EmailModel = require('../models/Download.model')
const nodemailer = require('nodemailer');
const spValidate = require('sp-validate');
const DownloadModel = require('../models/Download.model');


export const  DownloadController = {
  async sendEmail(req, res) {
   const {email, firstName, lastName, company, role, website } = req.body;
   
  let errors = {};


 if(!spValidate.isEmail(email)) {
                 errors.email = 'Email must be valid'

}


if(spValidate.isLength(firstName, 3)) {
    errors.firstName = 'Your first name is too short'
}


if(spValidate.isEmpty(firstName)) {
    errors.firstName = 'First name must not be empty'
}

if(spValidate.isLength(lastName, 3)) {
    errors.lastName = 'Your last name is too short'
}

if(spValidate.isEmpty(lastName)) {
    errors.lastName = 'Last name must not be empty'
}

if(spValidate.isLength(company, 2)) {
    errors.company = 'Your company name is too short'
}

if(spValidate.isEmpty(company)) {
    errors.company = 'Company name must not be empty'
}

if(spValidate.isLength(role, 3)) {
    errors.role = 'Your role name is too short'
}
if(spValidate.isEmpty(role)) {
    errors.role = 'Role must not be empty'
}

if(spValidate.isLength(website, 3)) {
    errors.website = 'Your website url  is too short'
}

if(spValidate.isEmpty(website)) {
    errors.website = 'Website must not be empty'
}

if(Object.keys(errors).length > 0 ) {
    return res.json(errors)
}


   const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port:  993,
  auth: {
    user: 'jaimeinoque20@gmail.com',
    pass: 'Jovyta@jaime1996'
  }
   });
  
           

           

            const download = new DownloadModel({
                email, firstName, lastName, company, role, website 
            });

           await download.save().then(async () => {
            await transporter.sendMail({
                from: `Francisco Inoque - noreply<mycv@franciscoinoque.tech>`,
                to: email,
                subject: 'Thank you for downloading my CV',
                
                html: `<h1>Hello ${firstName}</h1>
                <br>
                <br>
                <strong>Here is Francisco, to download my CV just click on the link: </strong><br>
                <a href="https://drive.google.com/file/d/19gvFFGESD5Fk9j3XF9NfEW6oU7AYSw79/view?usp=sharing">Click me!</a>
                
                <h3>Contacts: </h3>
                <ul>
                <li>Skype: <span style="color: #8e2ddd">tchessico@live.com</span> </li>
                <li>Email: <span style="color: #8e2ddd">jaimeinoque20@gmail.com</span> </li>
                </ul>
                
                `
         
            }).then(() => {
                return res.json({success: 'Your message sent successfully'})
            }).catch(err => {
                return res.json(err)
            })
           })
  
  }
}