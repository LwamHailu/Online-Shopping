const mongoose=require('mongoose');

mongoose.connect('mongodb://lwam:Godisgood2017@ds041516.mlab.com:41516/onlineshoppingdb',{useMongoClient:true});

const productsSchema=new mongoose.Schema({
	id:Number,
	name:String,
	description:String,
	price:Number,
	condition:String,
	category:String
});

const Products=mongoose.model('Products',productsSchema);

module.exports=Products;