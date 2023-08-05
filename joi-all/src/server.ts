import { config } from './config/config';
import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import Logging from './library/Logging';
import chalk from 'chalk';

const router = express();

// const databaseURL = 'mongodb://127.0.0.1:27017/qwe';
// const databaseURL = 'mongodb://localhost:27017/qwe';

mongoose
    .connect(config.mongo.url, {
        family: 4 // enables ipv4, localhost is ipv6, and it's not enaqbled by default
    })
    .then(() => {
        Logging.log('DB is Connected ok...');
        // console.log(chalk.blue('Hello world!'));
    })
    .catch((err) => {
        Logging.error('An Error eocurred...');
        Logging.error(err);
    });

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//     console.log('Connected to MongoDB successfully!');
// });
