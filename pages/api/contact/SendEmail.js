async function handler(req, res) {
  if (req.method !== 'POST') {
      return;
  }
  
  const data = req.body;

  const { nameFirst, nameLast, email, message } = data;

  if (
    !nameFirst ||
    !nameLast ||
    !email.includes('@') ||
    !message 
  ) {
    res.status(422).json({
      message:
        'message not sent due to missing input data',
    });
    return;
  }

  // start setting the message variables

   // start setting the email verification variables
  
   const nodemailer = require('nodemailer');
   const sendgridTransport = require('nodemailer-sendgrid-transport');

   const transporter = nodemailer.createTransport(sendgridTransport({
       auth: {
       api_key: process.env.SendGrid_API_key
       }
   }));

   // end setting the email verification variables

   transporter.sendMail({
    to: 'stephen.dewyer@stephengdewyer.info',
    from: 'sdewyer@artintechservices.com',
    subject: `message from ${nameFirst} ${nameLast}`,
    text: 'message sent via web work portfolio contact form',
    html: `${message} <br /><br />Sender email: ${email}`,
   })
   .then(() => {
    console.log('email 01 successfully sent')
  })
  .catch((error) => {
    console.error(error)
  })


   transporter.sendMail({
    to: email,
    from: 'sdewyer@artintechservices.com',
    subject: `message receipt`,
    text: 'message sent via stephen dewyer web work portfolio contact form',
    html: `<p>hi ${nameFirst} ${nameLast},<br /><br />thank you for contacting me.  Your email has been received.<br /><br />Best,<br /><br />stephen dewyer<br />www.stephendewyerwebwork.com</p>`,
   })
   .then(() => {
    console.log('email 02 successfully sent')
  })
  .catch((error) => {
    console.error(error)
  })

  // end sending the message

  res.status(200).json({ message: 'message sent'});

  return;
}


export default handler;