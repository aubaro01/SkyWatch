const express = require('express');
const axios = require('axios');
require('dotenv').config(); 
const cors = require('cors');
const apodRoutes = require('./Routes/apodRoute');
const app = express();


app.use(cors({
  origin: process.env.REACT_APP_API_URL  
}));

app.use(express.json()); 


app.use('/api', apodRoutes);
app.get('/', (req, res) => {
  res.status(200).json({ message: 'API online!!' });
});

module.exports = (req, res) => {
  app(req, res);  
};
