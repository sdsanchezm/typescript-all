import { config } from './config/config';
import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import Logging from './library/Logging';
import chalk from 'chalk';
import authorRoutes from './routers/Author';

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
        StartServer();
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

const StartServer = () => {
    router.use((req, res, next) => {
        Logging.info(`Incoming =-> Method: ${req.method}, Path: ${req.path}, Url: ${req.url}, IP: ${req.socket.remoteAddress}`);

        res.on('finish', () => {
            Logging.info(`Incoming =-> Method: ${req.method}, Path: ${req.path}, Url: ${req.url}, IP: ${req.socket.remoteAddress}, Status: ${res.statusCode}`);
        });

        next();
    });

    //     URL-encoded parsing: URL-encoded data is a way to send data from the client (e.g., HTML forms) to the server. It takes the form of key-value pairs, and the data is URL-encoded to ensure it can be safely transmitted over HTTP.

    // Parsing the data: When the server receives a request with URL-encoded data (usually from a form submission), the express.urlencoded() middleware is used to parse this data and populate the req.body object with the parsed data. This allows you to access the submitted form data in your route handlers using req.body.

    // The extended option: The extended option determines how the URL-encoded data will be parsed. When extended is set to true, the qs library is used, which allows for a richer parsing, supporting nested objects and arrays. If set to false, the built-in querystring library is used, which provides simpler parsing but does not support nested structures.
    router.use(express.urlencoded({ extended: true }));
    router.use(express.json());

    router.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

        if (req.method === 'OPTIONS') {
            res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
            return res.status(200).json({});
        }

        next();
    });

    router.use('/authors', authorRoutes);

    router.get('/ping', (req, res, next) => {
        res.status(200).json({ message: 'success' });
    });

    router.use((req, res, next) => {
        const error = new Error('Not Found');
        Logging.error(error);
        return res.status(400).json({ message: error.message });
    });

    // use app.listen or http.createServer() depends on specific requirements.
    // the level of control and customization needed
    // For simple applications, app.listen sufficient,
    // for complexity using http.createServer() would be beneficial
    http.createServer(router).listen(config.server.port, () => {
        Logging.info(`Server is running on port ${config.server.port}`);
    });
};
