'use strict';
var express = require('express');
var router = express.Router();


    router.use('/', require('./routes/index'));
    router.use('*', require('./routes/index'));

module.exports = router;
