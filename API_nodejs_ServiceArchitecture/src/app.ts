import express, { NextFunction } from 'express';
import bodyParser from 'body-parser';
const mongoose = require('mongoose');

import employeeRoutes from './routes/employeeRoutes';
import departmentRoutes from './routes/departmentRoutes';


const port = process.env.PORT || 3000;
const MONGODB_URL = process.env.MONGODB_URI || 'mongodb://localhost:27017/corporatets1';

const app = express();

app.use(bodyParser.json());

mongoose.connect(MONGODB_URL, {
    family: 4,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    useNewUrlParser: true,
});

mongoose.connection.on('error', (err) => {
    console.error(`Error connection to MongoDB: ${err}`);
});

app.use('/api/employees', employeeRoutes);
app.use('/api/departments', departmentRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});


app.listen(port, () => {
    console.log(`Server up on port ${port}`);
});
