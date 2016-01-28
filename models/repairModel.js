'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var repairModel = new Schema({

    name:{
      type: String,
      require: true
    },
    vID:{
      type: String,
      require: true
    },
    service:{
      type: String,
      require: true
    },
    date:{
      type: String,
      require: true
    },
    details:
      type: String,
      require: true
    },
    issuedBy:{
      type: String,
      require: true
    }
});

module.exports = mongoose.model('Repair', repairModel);
