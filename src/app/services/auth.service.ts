import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(data) {
    return this.http.post('http://localhost:3000/api/login', data)
  }

  signup(data) {
    return this.http.post('http://localhost:3000/api/signup', data)
  }
}