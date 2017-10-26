const express = require('express');
const router = express.Router();
const inMemorybookBD = require('../model/book');

router.route('/')
    .get(function (req, res) {
        inMemorybookBD.find(function(err,book){
        	if(err) throw err;
        	res.json(book);
        });
    })
    .post(function (req, res) {
        const newbook = req.body;
        book=new inMemorybookBD(newbook);
        book.save();
        res.json(newbook);
    })

router.route('/:id')
    .put(function (req, res) {
        inMemorybookBD.findOneAndUpdate({'id':req.params.id},req.body,function(err,book){
        	if(err) throw err;
        });
        res.json('OK');
    })
    .delete(function(req,res){
        inMemorybookBD.findOneAndRemove({'id':req.params.id},function(err,book){
        	if(err) throw err;
        })
        res.json('OK');	
    })
module.exports = router;