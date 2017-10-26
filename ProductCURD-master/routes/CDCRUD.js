const express = require('express');
const router = express.Router();
const inMemoryCDBD = require('../model/CD');

router.route('/')
    .get(function (req, res) {
        inMemoryCDBD.find(function(err,CD){
        	if(err) throw err;
        	res.json(CD);
        });
    })
    .post(function (req, res) {
        const newCD = req.body;
        CD=new inMemoryCDBD(newCD);
        CD.save();
        res.json(newCD);
    })

router.route('/:id')
    .put(function (req, res) {
        inMemoryCDBD.findOneAndUpdate({'id':req.params.id},req.body,function(err,CD){
        	if(err) throw err;
        });
        res.json('OK');
    })
    .delete(function(req,res){
        inMemoryCDBD.findOneAndRemove({'id':req.params.id},function(err,CD){
        	if(err) throw err;
        })
        res.json('OK');	
    })
module.exports = router;