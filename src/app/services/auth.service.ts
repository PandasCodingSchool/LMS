import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  constructor(private http:HttpClient) { }

  login(payload: { email: string, password: string}){
     return this.http.post('http://localhost:8085/auth/login', payload);
  }

  getUser(){
    return JSON.parse(window.localStorage.getItem('user')!);
  }

  setUser(user: { email: string, password: string}){
    window.localStorage.setItem('user', JSON.stringify(user));
  }
}
