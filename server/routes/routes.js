import express from 'express';
import { uploadImage, downloadImage } from '../controller/image-controller.js';
import upload from '../utils/upload.js';


const router = express.Router();

router.post('/send-email', (req, res) => {
    // Example: Extract recipient email, subject, and text from request body
    const { recipient, subject, text } = req.body;

    // Example: Make a POST request to send-email endpoint with recipient email, subject, and text
    axios.post('http://localhost:8000/send-email', { recipient, subject, text })
        .then(response => {
            res.send(response.data);
        })
        .catch(error => {
            console.error('Error sending email:', error);
            res.status(500).json({ error: 'Failed to send email' });
        });
});
router.post('/upload', upload.single('file'), uploadImage);
router.get('/file/:fileId', downloadImage);
export default router;