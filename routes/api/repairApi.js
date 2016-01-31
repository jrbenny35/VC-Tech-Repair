'use strict';

var express = require('express');
var router = express.Router();
var app = express();

var models = require('../../models/index');

/* Repair Form Api */
router.route('/repair_form')

  .post(function(req, res, next){
    console.log('This is the post');
  });


    //function(req, res, next){



    /*
    var repair = new models.repair();

    repair.name = req.body.name;
    //repair.vId = req.params('vID');
    //repair.service = req.params('service');
    //repair.date = req.params('date');
    //repair.details = req.params('details');
    //repair.issedBy = req.params('issedBy');

    repair.save(function(err, repair){
      if (!err) {
                return res.json({ message: 'Repair Form Created'});

            } else {
                return console.log(err);
            }
    });
    */
  //End post function


module.exports = router;
