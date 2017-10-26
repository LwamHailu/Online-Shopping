const express = require('express');
const router = express.Router();
const inMemoryproductBD = require('../model/product');

router.route('/')
    .get(function (req, res) {
        inMemoryproductBD.find(function(err,product){
        	if(err) throw err;
        	res.json(product);
        });
    })
    .post(function (req, res) {
        const newproduct = req.body;
        product=new inMemoryproductBD(newproduct);
        product.save();
        res.json(newproduct);
    })

router.route('/:id')
    .get(function (req, res) {
        inMemoryproductBD.findOne({'id':req.params.id},function(err,product){
        	if(err) throw err;
        	res.json(product);
        });
    })
    .put(function (req, res) {
        inMemoryproductBD.findOneAndUpdate({'id':req.params.id},req.body,function(err,product){
        	if(err) throw err;
        });
        res.json('OK');
    })
    .delete(function(req,res){
        inMemoryproductBD.findOneAndRemove({'id':req.params.id},function(err,product){
        	if(err) throw err;
        })
        res.json('OK');	
    })
module.exports = router;