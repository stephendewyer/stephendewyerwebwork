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

  // begin sending the message

  const sgMail = require('@sendgrid/mail')
  sgMail.setApiKey(process.env.SendGrid_API_key)
  const msg = [
      {
        to: 'stephen.dewyer@stephengdewyer.info',
        from: 'stephen.dewyer@stephengdewyer.info',
        subject: `message from ${nameFirst} ${nameLast} at ${email}`,
        text: 'message sent via web work portfolio contact form',
        html: message
    },
    {
      to: email,
      from: 'stephen.dewyer@stephengdewyer.info',
      subject: `message from ${nameFirst} ${nameLast} at ${email}`,
      text: 'message sent via stephen dewyer web work portfolio contact form',
      html: `<p>hi ${nameFirst} ${nameLast},<br /><br />thank you for contacting me.  Your email has been received.<br /><br />Best,<br /><br />stephen dewyer<br />www.stephendewyerwebwork.com</p>`,
    },
  ];
  sgMail
    .send(msg)
    .then(() => {
      console.log('email successfully sent')
  })
  .catch((error) => {
    console.error(error)
  })

  // end sending the message

  res.status(200).json({ message: 'message sent'});

  return;
}


export default handler;