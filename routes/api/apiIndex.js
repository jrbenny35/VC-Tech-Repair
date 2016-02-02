'use strict';
var express = require('express');
var router = express.Router();

router.use('/repair', require('./repairApi.js'));

module.exports = router;
