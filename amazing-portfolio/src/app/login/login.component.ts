import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg:string = " ";
  constructor(public router:Router) { } //dependancy injection

  ngOnInit(): void {
  }

  checkUser(loginRef:any) {
    //console.log("Event generated");
    console.log(loginRef);
    let user1 = loginRef.user;
    let pass1 = loginRef.pass;
    if(user1 == "alison_cooper" && pass1 == "654321"){
      this.msg="Login Successful, redirecting to Portfolio page!"
      this.router.navigate(["portfolio"])
    }else {
      this.msg = "Please try agian!";
    }
  }

}
