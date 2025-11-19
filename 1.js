// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const nodemailer = require('nodemailer'); // email ke liye
// const twilio = require('twilio'); // SMS ke liye
// require('dotenv').config();

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// // Twilio config
// const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

// // In-memory OTP storage (demo purpose, production me DB use kare)
// let otpStore = {};

// // Generate OTP
// function generateOTP() {
//     return Math.floor(100000 + Math.random() * 900000); // 6 digit OTP
// }

// // Send OTP via Twilio SMS
// async function sendSMSOTP(phone, otp) {
//     await client.messages.create({
//         body: `Your OTP is ${otp}`,
//         from: process.env.TWILIO_PHONE, 
//         to: phone
//     });
// }

// // Send OTP via Email
// async function sendEmailOTP(email, otp) {
//     let transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: process.env.EMAIL_USER,
//             pass: process.env.EMAIL_PASS
//         }
//     });

//     await transporter.sendMail({
//         from: process.env.EMAIL_USER,
//         to: email,
//         subject: 'Your OTP Code',
//         text: `Your OTP is ${otp}`
//     });
// }

// // Route: Send OTP
// app.post('/send-otp', async (req, res) => {
//     const { phone, email } = req.body;

//     if (!phone && !email) {
//         return res.status(400).json({ success: false, message: 'Phone or Email required!' });
//     }

//     const otp = generateOTP();
//     const key = phone || email; // store OTP by phone or email
//     otpStore[key] = otp;

//     try {
//         if(phone) await sendSMSOTP(phone, otp);
//         if(email) await sendEmailOTP(email, otp);
//         res.json({ success: true, message: 'OTP sent!' });
//     } catch(err) {
//         console.log(err);
//         res.status(500).json({ success: false, message: 'Error sending OTP' });
//     }
// });

// // Route: Verify OTP
// app.post('/verify-otp', (req, res) => {
//     const { key, otp } = req.body; // key = phone or email

//     if (otpStore[key] && otpStore[key].toString() === otp.toString()) {
//         delete otpStore[key]; // OTP use hone ke baad delete kar do
//         return res.json({ success: true, message: 'OTP verified!' });
//     } else {
//         return res.status(400).json({ success: false, message: 'Invalid OTP' });
//     }
// });

// app.listen(3000, () => console.log('Server running on port 3000'));
