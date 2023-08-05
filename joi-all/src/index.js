// const express = require('express');
// const logger = require('morgan');
// const bodyParser = require('body-parser');

// const app = express();
// const port = process.env.NODE_ENV || 3003;

// // app.set('/', port);
// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// app.listen(port, () => {
//     console.log(`app running in port: ${port}`);
// });

// import { config } from './config/config';
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const router = express();

const databaseURL = 'mongodb://localhost:27017/qwe';
// const databaseURL = 'mongodb://127.0.0.1:27017/qwe';

mongoose
    .connect(databaseURL, {
        family: 4,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connected to MongoDB...'))
    .catch((err) => console.log(err));

// mongoose
//     .connect(mongodburl)
//     .then(() => console.log('Connected to MongoDB...'))
//     .catch((err) => console.log(err));

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//     console.log('Connected to MongoDB successfully!');
// });
