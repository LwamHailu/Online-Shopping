import { Component, OnInit } from '@angular/core';
import { Payment } from './payment';
import { ActivatedRoute } from '@angular/router';
import { PaymentService } from './payment.service';

@Component({
    selector:'payment-detail',
    templateUrl: './payment-detail.component.html',
    styleUrls: ['./payment-detail.component.css'],
    
})



export class PaymentDetailComponent implements OnInit {
   
    
    payment:Payment;
    constructor(private route:ActivatedRoute,
                private paymentservice:PaymentService,
                ){} 
    

     ngOnInit(): void {
                   this.paymentservice.get(this.payment.firstName)
                   .subscribe(payment=>this.payment=payment);
                } 


            }

