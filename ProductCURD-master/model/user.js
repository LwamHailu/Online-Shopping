const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/test',{useMongoClient:true});

const userSchema=new mongoose.Schema({
	accountid:String,
	password:String,
	firstname:String,
	lastname:String,
	gender:String
});

const User=mongoose.model('User',userSchema);

module.exports=User;