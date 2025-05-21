const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');
const apodRoutes = require('./Routes/apodRoute');
require('dotenv').config();

const app = express();

app.use(cors());
app.use('/api', apodRoutes);

module.exports.handler = serverless(app);
