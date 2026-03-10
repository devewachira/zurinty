import Lead from '../models/Lead.js';
import transporter from '../utils/mailer.js';
import dotenv from 'dotenv';

dotenv.config();

export const createLead = async (req, res) => {
  const { firstName, lastName, email, phone, services, message } = req.body;

  if (!email || !firstName || !lastName) {
    return res.status(400).json({ message: 'Required fields are missing' });
  }

  try {
    await Lead.create({
      firstName,
      lastName,
      email,
      phone,
      services,
      message
    });

    await transporter.sendMail({
      from: `"Zurinty Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Inquiry</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Requested Services:</strong> ${services && services.length > 0 ? services.join(', ') : 'None selected'}</p>
        <p><strong>Message:</strong> ${message || 'No message provided'}</p>
      `,
    });

    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending contact email or saving to DB:', error);
    res.status(500).json({ message: 'Failed to send message. Please try again later.' });
  }
};
