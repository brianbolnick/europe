const express = require('express');
const router = new express.Router();
const mongoose = require('mongoose');
const config = require('../../config');
const db_url = process.env.MONGODB_URI || config.dbUri
mongoose.connect(db_url);

router.get('/', function (req, res) {
    res.json({ message: 'API Initialized!' });
});

router.get('/test', function (req, res) {
    res.json({ message: 'It works!' });
});


module.exports = router;





