'use strict';
var express = require('express');
var router = express.Router();


    router.use('/', require('./routes/index'));
    router.use('/partials/', require('./routes/partials'));
    router.use('*', require('./routes/index'));
    router.use('/api', require('./routes/api/repairApi'));

module.exports = router;
