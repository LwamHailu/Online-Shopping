export class Payment{
constructor(
public paymentId:Number,
public firstName:String,
public lastName:String,
public street:String,
public city:String,
public state:String,
public zip:String,
public nameOnCard:String,
public cardNumber:Number,
public expiryMonth: String,
public expiryYear: String,
public cvc: String){};
}