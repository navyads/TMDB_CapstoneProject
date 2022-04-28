import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

user=new User();
msg:any;

  constructor(private _serive:RegistrationService, private _router:Router) { }

  ngOnInit(): void {
  }

  registerUser(){
    this._serive.registerUserFromRemote(this.user).subscribe(
      data=>{
        console.log("Response recieved");
        alert("Regitered Successfully");
        //this.msg="Registration Successfull";
        this._router.navigate([''])
      },
      error=>{
        console.log("Exception occured");
        this.msg=error.error;
      }
    )
  }
}
