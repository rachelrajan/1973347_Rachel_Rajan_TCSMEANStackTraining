import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  msg:string = "";
  constructor() { }

  ngOnInit(): void {
  }
  checkUser(loginRef:any) {
    //console.log("Event generated");
    console.log(loginRef);
    let fname1 = loginRef.fname;
    let lname1 = loginRef.lname;
    let user1 = loginRef.user;
    let pass1 = loginRef.pass;
    if(fname1 == "Alison" && lname1 == "Cooper" && user1 == "alison_cooper" && pass1 == "654321"){
      this.msg="Successfully Registered, please click on Login!"
    }else {
      this.msg = "Please try agian!";
    }
  }
}
