import express from 'express';
// import mongoose from 'mongoose';
const mongoose = require('mongoose');
import bodyParser from 'body-parser';

import authRoutes from './routes/authRoutes';
import { authMiddleware } from './middleware/authMiddleware';
import config from './config/config';


const app = express();

app.use(bodyParser.json());

app.use('/auth', authRoutes);

app.get('/protected', authMiddleware, (req, res) => {
    res.status(200).json({ message: 'Access granted' });
});

mongoose
    .connect(config.mongodbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch((error: Error) => {
        console.error('MongoDB connection error:', error);
    });
