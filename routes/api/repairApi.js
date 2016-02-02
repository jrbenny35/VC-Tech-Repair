'use strict';

var express = require('express');
var router = express.Router();
var app = express();

var models = require('../../models/index');

/* Repair Form Api */
router.route('/repair')

  .get(function(req, res){

    models.repair.find(function(err, repair){
      if(!err){
        return res.json(repair);
      } else {
        return console.log(err);
      }//End if else for finding repair form
    })

  })

  .post(function(req, res){

    var repair = new models.repair();

    repair.name = req.body.name;
    repair.vId = req.body.vID;
    repair.service = req.body.service;
    repair.date = req.body.date;
    repair.details = req.body.details;
    repair.issedBy = req.body.issuedBy;
    repair.message = req.body.message;
    repair.number = req.body.number;
    repair.email = req.body.email;
    repair.phoneNumber = req.body.phoneNumber;

    repair.save(function(err, repair){
      if (!err) {
                return res.json({ message: 'Repair Form Created'});

            } else {
                return console.log(err);
            }
    });
  //End post function

  });

router.route('/repair/:id')

    .get(function(req, res){
      models.repair.findById(req.params.id, function (err, repair) {
         if (!err) {
             return res.json(repair);

         } else {
             return console.log(err);
         }
     });
    })//End get function

    .put(function(req, res){
      models.repair.findById(req.params.id, function (err, repair) {

         if(!err){
           repair.name = req.body.name;
           repair.vId = req.body.vID;
           repair.service = req.body.service;
           repair.date = req.body.date;
           repair.details = req.body.details;
           repair.issedBy = req.body.issuedBy;
           repair.message = req.body.message;
           repair.number = req.body.number;
           repair.email = req.body.email;
           repair.phoneNumber = req.body.phoneNumber;

           repair.save(function(err, repair){
             if (!err) {
                       return res.json({ message: 'Repair Form Created'});

                   } else {
                       return console.log(err);
                   }
       });// End save functiom
    };//End if statement
  });//End find by id
})//End put function

    .delete(function(req, res){
      models.repair.remove({ _id: req.params.id},
          function (err, repair) {
              if (!err) {
                  return res.json({ message: 'Repair entry Deleted'});

              } else {
                  return console.log(err);
              }
          });
    })//End delete function
module.exports = router;
