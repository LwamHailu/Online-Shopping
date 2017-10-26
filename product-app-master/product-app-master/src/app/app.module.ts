import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { ProductDetailComponent} from './product-detail/product-detail.component';
import { CartDetailComponent } from './cart/cart-detail.component';
import {calculateTotalFeePipe} from './cart/countpipe';
import {ProductsComponent} from './product/products.component';
import {ProductService} from './product/product.service';
import {RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import { AppRoutingModule }     from './app-routing.module';
import { HttpClient,HttpClientModule }    from '@angular/common/http';
import { ProductManageModule } from './productmanagement/productmanagement.module';
import { UserService } from './user/user.service';
import { UserComponent } from './user/user.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from './authorization/authorization.component';
import {AuthAdminGuard,AuthLoginGuard} from './routerguard/routerguard.component';
import {FirstNamePipe} from './user/FirstName.pipe';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { DataService } from './onetemp/data.service';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login/login.component';

import { AppComponent } from './app.component';
import { PaymentComponent } from './payment/payment.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PaymentDetailComponent } from './payment/payment-detail.component';
import { PaymentService } from './payment/payment.service';
import {CartService} from './cart/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent,
    CartDetailComponent,
    calculateTotalFeePipe,
    ProductsComponent,
    DashboardComponent,
    UserComponent,
    FirstNamePipe,
    RegisteruserComponent,
    LoginComponent,
    PaymentComponent,
    NavbarComponent,
    PaymentDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ProductManageModule,
    HttpModule,
    
  ],
  providers: [ProductService,HttpClient,PaymentService,UserService,AuthAdminGuard,
              AuthLoginGuard,DataService,CartService,
              {provide: HTTP_INTERCEPTORS,
                useClass: AuthInterceptor, 
                multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
