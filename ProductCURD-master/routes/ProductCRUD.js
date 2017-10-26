var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

var db
//mongodb://<dbuser>:<dbpassword>@ds041516.mlab.com:41516/onlineshoppingdb
MongoClient.connect('mongodb://lwam:Godisgood2017@ds041516.mlab.com:41516/onlineshoppingdb', function (err, database) {
    if (err) return console.log(err)
    db = database
})

/*router.get('/', function (req, res, next) {
    db.collection('products').find().toArray(function (err, doc) {
        if (err) {
            console.log('Error fetching data from mongodb');
            res.send(err)
        }
        res.json(doc);
    });
});*/
router.route('/')
    .get(function (req, res, next) {
        db.collection('products').find().toArray(function(err,product){
        	if(err) throw err;
        	res.json(product);
        });
    })
    .post(function (req, res) {
        db.collection('products').save(req.body, (err, result) => {
    			if (err) {
        		console.log(err);
        		res.send(err);
    			}
    		})
        res.json(req.body);
    })

router.route('/:id')
    .get(function (req, res) {
    		console.log(req.params.id);
        db.collection('products').findOne({'id':+req.params.id},function(err,product){
        	if(err) throw err;
        	res.json(product);
        });
    })
    .put(function (req, res) {
        db.collection('products').findOneAndUpdate({'id':+req.params.id},req.body,function(err,product){
        	if(err) throw err;
        });
        res.json('OK');
    })
    .delete(function(req,res){
        db.collection('products').remove({'id':+req.params.id},function(err,product){
        	if(err) throw err;
        })
        res.json('OK');	
    })
module.exports = router;