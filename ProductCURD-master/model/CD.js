const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/test',{useMongoClient:true});

const CDsSchema=new mongoose.Schema({
	id:Number,
	title:String,
	price:Number
});

const CDs=mongoose.model('CDs',CDsSchema);

module.exports=CDs;