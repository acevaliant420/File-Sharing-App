import express from 'express';
import { uploadImage, getImage } from '../controller/image-controller.js';
import upload from '../utils/upload.js';

const router = express.Router();


router.post('/upload', upload.single('file'), uploadImage);
export default router;