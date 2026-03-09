import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import dns from 'dns';
import sequelize from './db.js';
import Subscriber from './models/Subscriber.js';
import Lead from './models/Lead.js';

dns.setDefaultResultOrder('ipv4first');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MySQL connection and synchronization
sequelize.authenticate()
  .then(() => {
    console.log('Connected to MySQL');
    // Sync models to create tables if they don't exist
    return sequelize.sync();
  })
  .then(() => console.log('Database tables synchronized'))
  .catch((err) => console.error('MySQL connection or synchronization error:', err));

// Transporter configuration for nodemailer
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  family: 4
});

// verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log('Error connecting to SMTP:', error);
  } else {
    console.log('Server is ready to take our messages');
  }
});

app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  try {
    // 1. Save to MySQL
    const existing = await Subscriber.findOne({ where: { email } });
    if (!existing) {
      await Subscriber.create({ email });
    }

    // 2. Send notification email to the admin (Zurinty)
    await transporter.sendMail({
      from: `"Zurinty System" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: 'New Newsletter Subscription',
      text: `A new user has subscribed to the newsletter: ${email}`,
      html: `<p>A new user has subscribed to the newsletter: <strong>${email}</strong></p>`,
    });

    // 3. Send welcome email to the subscriber
    await transporter.sendMail({
      from: `"Zurinty Marketing" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Welcome to Zurinty Marketing!',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333; line-height: 1.6;">
          <div style="background-color: #0b1b2a; padding: 40px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: #10b981; margin: 0; font-size: 28px;">Welcome to Zurinty</h1>
          </div>
          
          <div style="padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 10px 10px;">
            <p style="font-size: 18px; font-weight: bold;">Hello!</p>
            <p>Thanks for subscribing to our newsletter. We're thrilled to have you with us!</p>
            
            <h2 style="color: #0b1b2a; border-bottom: 2px solid #10b981; padding-bottom: 5px; margin-top: 30px;">Who We Are</h2>
            <p>
              Based in Nairobi, Kenya, <strong>Zurinty Marketing</strong> is a full-service creative agency dedicated to 
              helping brands stand out in the digital landscape. We are passionate about building better experiences online 
              while keeping integrity, creativity, and transparency at the core of everything we do.
            </p>
            
            <h2 style="color: #0b1b2a; border-bottom: 2px solid #10b981; padding-bottom: 5px; margin-top: 30px;">How We Can Help You Grow</h2>
            <p>We offer a wide variety of strategic services designed to help your business succeed and grow online:</p>
            
            <ul style="list-style: none; padding: 0;">
              <li style="margin-bottom: 10px; padding-left: 20px; border-left: 3px solid #10b981;">
                <strong>Website Design & Development:</strong> High-converting, beautiful websites that work across all devices.
              </li>
              <li style="margin-bottom: 10px; padding-left: 20px; border-left: 3px solid #10b981;">
                <strong>SEO Strategy:</strong> Improving your visibility on search engines to drive organic traffic.
              </li>
              <li style="margin-bottom: 10px; padding-left: 20px; border-left: 3px solid #10b981;">
                <strong>Brand Development:</strong> Crafting unique identities that resonate with your target audience.
              </li>
              <li style="margin-bottom: 10px; padding-left: 20px; border-left: 3px solid #10b981;">
                <strong>Content & Email Marketing:</strong> Engaging your customers with value-driven content and campaigns.
              </li>
              <li style="margin-bottom: 10px; padding-left: 20px; border-left: 3px solid #10b981;">
                <strong>Photography & Video Production:</strong> Professional visual storytelling for your brand.
              </li>
            </ul>
            
            <div style="margin-top: 40px; text-align: center;">
              <a href="https://zurinty.com/contact" style="background-color: #10b981; color: #0b1b2a; padding: 15px 25px; text-decoration: none; border-radius: 30px; font-weight: bold; display: inline-block;">Request a Free Quote</a>
            </div>
            
            <p style="margin-top: 40px; font-size: 14px; color: #666; text-align: center;">
              © ${new Date().getFullYear()} Zurinty Marketing. Nairobi, Kenya.<br>
              Kilimani Business Center
            </p>
          </div>
        </div>
      `,
    });

    res.status(200).json({ message: 'Subscription successful!' });
  } catch (error) {
    console.error('Error sending email or saving to DB:', error);
    res.status(500).json({ message: 'Failed to subscribe. Please try again later.' });
  }
});

app.post('/api/contact', async (req, res) => {
  const { firstName, lastName, email, phone, services } = req.body;

  if (!email || !firstName || !lastName) {
    return res.status(400).json({ message: 'Required fields are missing' });
  }

  try {
    // 1. Save to MySQL
    await Lead.create({
      firstName,
      lastName,
      email,
      phone,
      services
    });

    // 2. Send notification email to the admin
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
      `,
    });

    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending contact email or saving to DB:', error);
    res.status(500).json({ message: 'Failed to send message. Please try again later.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
