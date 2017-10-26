const express = require('express');
const router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

const paymentDB = require('../model/payment');
var db

MongoClient.connect('mongodb://lwam:Godisgood2017@ds041516.mlab.com:41516/onlineshoppingdb', function (err, database) {
    if (err) return console.log(err)
    db = database
})

router.route('/')
    .get(function (req, res) {
        paymentDB.find(function(err,payment){
        	if(err) throw err;
        	res.json(payment);
        });
    })
    .post(function (req, res) {
        const newpayment = req.body;
        payment=new paymentDB(newpayment);
        payment.save();
        res.json(newpayment);
    })

router.route('/:id')
    .put(function (req, res) {
        paymentDB.findOneAndUpdate({'id':req.params.id},req.body,function(err,payment){
        	if(err) throw err;
        });
        res.json('OK');
    })
    .delete(function(req,res){
        paymentDB.findOneAndRemove({'firstName':req.params.id+''},function(err,payment){
        	if(err) throw err;
        })
        res.json('OK');	
    })
module.exports = router;