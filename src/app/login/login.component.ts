import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: ''
  }
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  loginMe() {
    console.log(this.user)
    this.auth.login(this.user)
      .subscribe(data => {
        console.log(data)
        localStorage.setItem('ID', data['content']._id)
        localStorage.setItem('username', data['content'].username)
        localStorage.setItem('email', data['content'].email)
        this.router.navigate(['chat'])
      }, err => {
        console.log(err)
      })
  }
}