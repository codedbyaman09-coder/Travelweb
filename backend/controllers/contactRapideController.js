const nodemailer = require('nodemailer');

exports.sendContactEmail = async (req, res) => {
  try {
    const { name, email, phone, destination, periode, duree, voyageurs, budget, message } = req.body;

    // 1. Validation
    if (!name || !email || !phone) {
      return res.status(400).json({ success: false, message: 'Name, Email and Phone are required fields.' });
    }

    // 2. Transporter configuration
    let transporter;
    let isTestAccount = false;
    try {
      transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });
      // Test the connection
      await transporter.verify();
    } catch (authError) {
      console.warn('Real SMTP failed (Invalid password). Falling back to Ethereal test account...');
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: testAccount.user,
          pass: testAccount.pass
        }
      });
      isTestAccount = true;
    }

    // 3. Email Template
    let rowsHtml = '';
    for (const [key, value] of Object.entries(req.body)) {
      // Capitalize first letter of key for better display
      const displayKey = key.charAt(0).toUpperCase() + key.slice(1);
      const displayValue = value ? value : 'Non spécifié';
      rowsHtml += `
        <tr>
          <td style="background-color: #f8f9fa; font-weight: bold; padding: 10px; width: 35%; border: 1px solid #ddd;">${displayKey}</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${displayValue}</td>
        </tr>
      `;
    }

    const htmlTemplate = `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h2 style="color: #A88B52;">New Contact Rapide Form Submission</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px; border: 1px solid #ddd;">
          ${rowsHtml}
        </table>
      </div>
    `;

    // 4. Send Email
    const info = await transporter.sendMail({
      from: `"${name}" <${isTestAccount ? 'test@ethereal.email' : process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: 'New Contact Rapide Form Submission',
      html: htmlTemplate,
      replyTo: email
    });

    let responseMessage = 'Email sent successfully.';
    let previewUrl = null;
    if (isTestAccount) {
      previewUrl = nodemailer.getTestMessageUrl(info);
      console.log('Test email URL: ' + previewUrl);
      responseMessage = 'Email sent to test inbox (Check console for URL).';
    }

    res.status(200).json({ success: true, message: responseMessage, previewUrl });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email.' });
  }
};

exports.subscribeNewsletter = async (req, res) => {
  try {
    const { email, message } = req.body;

    if (!email) {
      return res.status(400).json({ success: false, message: 'Email is required.' });
    }

    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const htmlTemplate = `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h2 style="color: #A88B52;">Nouvelle Inscription à la Newsletter</h2>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong> ${message || 'Voyages thématiques, itinéraires originaux et conseils exclusifs... Recevez notre newsletter'}</p>
      </div>
    `;

    await transporter.sendMail({
      from: `"Indeora Voyages" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: 'Nouvelle Inscription à la Newsletter',
      html: htmlTemplate,
      replyTo: email
    });

    res.status(200).json({ success: true, message: 'Successfully subscribed to newsletter.' });
  } catch (error) {
    console.error('Error sending newsletter email:', error);
    res.status(500).json({ success: false, message: 'Failed to subscribe to newsletter.' });
  }
};
