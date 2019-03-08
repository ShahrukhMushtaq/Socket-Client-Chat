import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";
import { Router, Route } from "@angular/router";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user = {
    email: '',
    password: '',
    username: ''
  }
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  signup() {
    console.log(this.user)
    this.auth.signup(this.user)
      .subscribe(data => {
        console.log(data)
        this.router.navigate(['login'])
      }, err => {
        console.log(err)
      })
  }

}
