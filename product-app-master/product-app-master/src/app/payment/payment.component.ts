import { Component, HostListener, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { PaymentService } from './payment.service';
import { Payment } from './payment';
import { Router } from '@angular/router';
@Component({
    selector:'payment',
    templateUrl: './payment.component.html',
    styleUrls: ['./payment.component.css'],
    
})

export class PaymentComponent implements OnInit {
  payment:Payment=new Payment(
    null,null,null,null,null,null,null,null,null,null,null,null
  );
    
    handler: any;
    amount = 500;
    submitted = false; 
    constructor(private paymentService: PaymentService,private router:Router) { }
    onSubmit() { this.submitted = true;} 
      
    payments: Payment[];
    selectedPayment: Payment;
  
 
  
    getPayments(): void {
      this.paymentService.list().subscribe(payments => this.payments = payments);
    }
  
    
    ngOnInit(): void {
      this.getPayments();
    }
  
    onSelect(payment: Payment): void {
      this.selectedPayment = payment;
    }
  
    handlePayment(): void {
      this.paymentService.savePayment(this.payment);
      this.router.navigate(['/paymentdetail']);
    }
  } 




