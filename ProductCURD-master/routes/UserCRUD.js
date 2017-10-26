const express = require('express');
const router = express.Router();
const inMemoryuserBD = require('../model/user');

router.route('/')
    .get(function (req, res) {
        inMemoryuserBD.find(function(err,user){
        	if(err) throw err;
        	res.json(user);
        });
    })
    .post(function (req, res) {
    	if(req.header("authorization")==="fangxiaojiang"){
        const newuser = req.body;
        user=new inMemoryuserBD(newuser);
        user.save();
        res.json(newuser);
      }
      else
        res.json(null);
    })

router.route('/:accountid')
    .get(function (req, res) {
        inMemoryuserBD.findOne({'accountid':req.params.accountid},function(err,user){
        	if(err) throw err;
        	res.json(user);
        });
    })
    .put(function (req, res) {
        inMemoryuserBD.findOneAndUpdate({'accountid':req.params.accountid},req.body,function(err,user){
        	if(err) throw err;
        });
        res.json('OK');
    })
    .delete(function(req,res){
        inMemoryuserBD.findOneAndRemove({'accountid':req.params.accountid},function(err,user){
        	if(err) throw err;
        })
        res.json('OK');	
    })
    
router.route('/:accountid/:password')
	    .get(function (req, res) {
	    	if(req.header("authorization")==="fangxiaojiang"){
        	inMemoryuserBD.findOne({'accountid':req.params.accountid,'password':req.params.password},function(err,user){
        		if(err) throw err;
        		res.json(user);
        	})
        }
        else
        	res.json(null);
    })
module.exports = router;