import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Payment } from './payment';
import { CartService } from './../cart/cart.service';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Injectable()
export class PaymentService{

  
  constructor(private http:HttpClient,private cartService:CartService){};
  url="http://localhost:3000/api/Payments";
 
  currentPayment:Payment;

  savePayment(payment:Payment):void{
    let body={
    "firstName":payment.firstName,
    "lastName":payment.lastName,
    "street":payment.street,
    "city":payment.city,
    "state":payment.state,

    "zip": payment.zip,
    "amount":this.cartService.getAllFees,
    }
    
    this.http.post(this.url,body).subscribe(value=>
      this.currentPayment=new Payment(
        (value as Payment).paymentId,
        (value as Payment).firstName,
        (value as Payment).lastName,
        (value as Payment).street,
        (value as Payment).city,
        (value as Payment).state,
        (value as Payment).zip,
        (value as Payment).nameOnCard,
        (value as Payment).cardNumber,
        (value as Payment).expiryMonth,
        (value as Payment).expiryYear,
        (value as Payment).cvc
      )
    );
  }

  public create(payment: Payment): Observable<Payment> {
    return this.http.post<Payment>(this.url, payment);
  }
  updatePayment(payment:Payment):void{
    let body={
    "firstName":payment.firstName,
    "lastName":payment.lastName,
    "street":payment.street,
    "city":payment.city,
    "state":payment.state,

    "zip": payment.zip,
    "amount":this.cartService.getAllFees,
    }
    
    this.http.put(this.url+'/'+payment.firstName,body).subscribe();
  }

  deletePayment(payment:Payment):void{
    this.http.delete(this.url+'/'+payment.firstName).subscribe(); 
  }

 

  public get(id: String): Observable<Payment> {
    return this.http.get<Payment>(`${this.url}/${id}`);
  }
   
  
  public list(): Observable<Array<Payment>> {
    return this.http.get<Array<Payment>>(this.url);
  }
}