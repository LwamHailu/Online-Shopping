import { Component, OnInit,Input,Output } from '@angular/core';
import { DataService } from '../onetemp/data.service';
import { Router } from '@angular/router';
import { User } from '../registeruser/user';
import {UserService} from '../user/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 public user: User;
 public showForm:boolean;
 public success:boolean;
 @Input() public isValid: boolean;
 
  constructor(private dataService: DataService, private router: Router,private us:UserService) { 

  }

  ngOnInit() {}
 logIn(){  }



 onclick(){ 
     this.dataService.getUserByEmail(this.us.getCurrentUser().email).subscribe(data=>{
        this.user = data.json();
        this.showForm=true; 
        });
   }

  upDate(){
  this.dataService.updateUser( new User(
    this.user.userName,
     this.user.email,
     this.user.password,
     this.user.role,
     this.user.gender
   ));
   this.success=true;
}




 deleteUser() {
   
        this.dataService.deleteUser(this.us.getCurrentUser().email);
        this.us.setLoginState();
    }
  
    
}
