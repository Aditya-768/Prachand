const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// dotenv config
dotenv.config();

// mongodb connection
connectDB();

// rest object
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use('/api/v1/user', require('./routes/userRoutes'));

// listen port
const port = process.env.PORT || 8080;
app.listen(port, (req,res) => {
    console.log(`Server is running in ${process.env.NODE_MODE} Mode on port ${port}.`.bgCyan.white);
});