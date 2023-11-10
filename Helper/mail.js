const nodemailer = require('nodemailer');
function sendMail(email,subjectContent,bodyContent) {
  return new Promise((resolve, reject) => {
    let mailOptions = {
      from: 'quickcare.com',
      to: email,
      subject: subjectContent,
      html: `<p>${bodyContent}</p>`,
    };
    let mailConfig = {
      service: 'gmail',
      auth: {
        user: 'quickcarev2@gmail.com',
        pass: 'xbhfzyyrazkgpmcu'
      }
    };
    nodemailer.createTransport(mailConfig).sendMail(mailOptions, (err, info) => {
      if (err) {
        reject(err);
      } else {
        console.log("Mail Delivered To : " + email);
        resolve(info);
      }
    });
  });
}
module.exports={sendMail}