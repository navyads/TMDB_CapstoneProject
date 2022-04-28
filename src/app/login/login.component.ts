import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { NgModel } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { LoginuserService } from '../loginuser.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

user=new User();
msg='';
  constructor(private _service:LoginuserService, private _router:Router) { }

  ngOnInit(): void {
  }

  userLogin(){
    this._service.loginUserFromRemote(this.user).subscribe(
      data=>{
      console.log("Response Recieved");
      alert("Login successful");
      this._router.navigate(['/home'])
    },
    error=>{
      console.log("Exception occured");
      this.msg="Bad Credetials";
    })
  }
}
