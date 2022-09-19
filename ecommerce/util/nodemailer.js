const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
// let testAccount = await nodemailer.createTestAccount();

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    secure: false, // true for 465, false for other ports
    auth: {
        user: "068ffc743191a7", // generated ethereal user
        pass: "adc80d7bb1e80e", // generated ethereal password
    },
});

// send mail with defined transport object
let sendMail = (users, msg) => {
    transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: users, // list of receivers
        subject: "Hello ✔", // Subject line
        text: msg, // plain text body
        // html: "<b>Hello world?</b>", // html body
    });
}


module.exports = sendMail

// console.log("Message sent: %s", info.messageId);
// // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

// // Preview only available when sending through an Ethereal account
// console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

