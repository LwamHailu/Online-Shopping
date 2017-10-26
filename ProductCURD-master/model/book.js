const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/test',{useMongoClient:true});

const booksSchema=new mongoose.Schema({
	id:Number,
	title:String,
	price:Number
});

const Books=mongoose.model('Books',booksSchema);

module.exports=Books;