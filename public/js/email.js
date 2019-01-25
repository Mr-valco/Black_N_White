// // Gmail Nodemailer Code
// const nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'bnwtest7133@gmail.com',
//     pass: 'password12.'
//   }
// });

// // Setup email Data with Unicode Symbols
// var mailOptions = {
//   from: 'bnwtest7133@gmail.com',  //Sender Address
//   to: 'genieyang93@gmail.com, 212579323@ge.com', //List of recievers
//   subject: 'Sending Email Account Unlocked!', // Subject Line
//   text: 'MyApps Account Unlocked!', //plain text body
//   html:"<b>You have been unlocked! Please sign back in. <b>" //HTML Body
// // html: " "
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// })

// //Need to make a function that concats SSO and "ge.com" to form an email address

// function createEmail() {
  
// }

// Nodemailer with Handle Bars and Email Template
const nodemailer = require('nodemailer'),
  transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'bnwtest7133@gmail.com',
        pass: 'password12.'
      },
    }),

  EmailTemplate = require('email-templates').EmailTemplate,
  path = require('path'),
  Promise = require('bluebird');


 let users = [
   {
    name: 'Genie Yang',
    email: 'genieyang93@gmail.com'
   },
   {
    name: 'Genie GE Email',
    email: '212579323@ge.com'
   },   
   {
    name: 'Valentin Meica',
    email: 'Valentin.Meica@ge.com'
   }, 
   
 ];


  function sendEmail(obj) {
    return transporter.sendMail(obj);
  }

  function loadTemplate(templateName, contexts) {
    let template = new EmailTemplate(path.join(__dirname, 'templates', templateName));
    return Promise.all(contexts.map((context) => {
      return new Promise((resolve, reject) => {
        template.render(context, (err, result) => {
          if(err) reject (err);
          else resolve({
            email: result,
            context,
          });
        });
      });
    }));
  }
  
  loadTemplate('welcome', users).then((results) => {
    return Promise.all(results.map((result) => {
      sendEmail({
        to: result.context.email,
        from: 'Me :)',
        subject: result.email.subject,
        html: result.email.html,
        text: result.email.text,
      });
    }));

  }).then(() => {
    console.log('Yay!')
  });
