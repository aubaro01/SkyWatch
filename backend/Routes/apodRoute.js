const express = require('express');
const { getApod } = require('../Controller/apodController');

const router = express.Router();

router.get('/apod', getApod);

module.exports = router;
