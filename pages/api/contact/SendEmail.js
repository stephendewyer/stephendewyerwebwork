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

  const nodemailer = require('nodemailer');
  const sendgridTransport = require('nodemailer-sendgrid-transport');

  const transporter = nodemailer.createTransport(sendgridTransport({
      auth: {
        api_key: process.env.SendGrid_API_key
      }
  }));

  // end setting the message variables

  // begin sending the message

  transporter.sendMail({
      to: 'stephen.dewyer@stephengdewyer.info',
      from: 'sdewyer@artintechservices.com',
      subject: `message from ${nameFirst} ${nameLast} at ${email}`,
      html: message
  })

  transporter.sendMail({
    to: email,
    from: 'sdewyer@artintechservices.com',
    subject: `message from ${nameFirst} ${nameLast} at ${email}`,
    html: `<p>hi ${nameFirst} ${nameLast},<br /><br />thank you for contacting me.  Your email has been received.<br /><br />Best,<br /><br />stephen dewyer</p>`
})

  // end sending the message

  res.status(200).json({ message: 'message sent'});

  return;
}


export default handler;