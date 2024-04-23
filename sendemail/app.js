const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/subscribe', (req, res) => {
    const { email, result, name } = req.body; // Extracting email and result from request body

    const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
          user: "rajatlovescoding@gmail.com",
          pass: "vkrz rcrn nyge dily",
        },
    });

    const mailOptions = {
        from: 'rajatlovescoding@gmail.com',
        to: email,
        subject: `ShareIt : File Sharing App by Rajat : ${name}`,
        text: `Your Download link is ready: ${result}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ message: 'Failed to send email' });
            alert("Failed to send email");
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).json({ message: 'Email sent successfully' });
            alert("Email sent successfully");   
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
