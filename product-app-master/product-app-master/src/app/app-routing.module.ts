import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { DashboardComponent }   from './dashboard/dashboard.component';
import { ProductsComponent }      from './product/products.component';
import { ProductDetailComponent }  from './product-detail/product-detail.component';
import { UserComponent }  from './user/user.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { LoginComponent } from './login/login.component';
import { AuthAdminGuard,AuthLoginGuard } from './routerguard/routerguard.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentDetailComponent } from './payment/payment-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: ProductDetailComponent },
  { path: 'products',     component: ProductsComponent },
  {path: 'payment',component:PaymentComponent,canActivate: [AuthLoginGuard]},
  {path:'paymentdetail',component:PaymentDetailComponent,canActivate: [AuthLoginGuard]},
  { path: 'register',     component: RegisteruserComponent },
  { path: 'user',     component: LoginComponent,canActivate: [AuthLoginGuard]}
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}