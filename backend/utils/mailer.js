import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, 
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  family: 4
});

transporter.verify(function (error, success) {
  if (error) {
    console.log('Error connecting to SMTP:', error);
  } else {
    console.log('Server is ready to take our messages');
  }
});

export default transporter;
