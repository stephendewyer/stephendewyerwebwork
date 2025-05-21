async function handler(req, res) {
  if (req.method !== 'POST') {
      return;
  }
  
  const data = req.body;

  const { nameFirst, nameLast, email, message } = data;

  if (
    !nameFirst ||
    !nameLast ||
    !email ||
    !message 
  ) {
    res.status(422).json({
      message:
        'message not sent due to missing input data',
    });
    return;
  }

  if (
    !email.includes('@')
  ) {
    res.status(422).json({
      message:
        'missing an @ symbol in email address',
    });
    return;
  }

  // begin sending the message

  const sgMail = require('@sendgrid/mail')
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = [
    {
      to: 'stephen.dewyer@stephengdewyer.info',
      from: 'sdewyer@artintechservices.com',
      subject: `message from ${nameFirst} ${nameLast}`,
      text: 'message sent via web work portfolio contact form',
      html: `${message} <br /><br />Sender email: ${email}`,
    },
    {
      to: email,
      from: 'sdewyer@artintechservices.com',
      subject: `message receipt`,
      text: 'message sent via stephen dewyer web work portfolio contact form',
      html: `<p>hi ${nameFirst} ${nameLast},<br /><br />thank you for contacting me.  Your email has been received.<br /><br />Best,<br /><br />stephen dewyer<br />www.stephendewyerwebwork.com</p>`,
    },
  ];
  (async () => {
    try {
      await sgMail.send(msg);
      res.status(200).json({ message: 'message sent'});
    } catch (error) {
      console.error(error);

      if (error.response) {
        console.error(error.response.body)
        res.status(422).json({ message: 'message not sent due to a problem with the API' });
      }
    }
  })();

  // end sending the message
  
  return;
}

export default handler;