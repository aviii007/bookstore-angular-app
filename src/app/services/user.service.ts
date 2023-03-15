import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  register(userDetails:any){
     return this.http.post("http://localhost:8084/user/register",userDetails);
  }

  login(userLogin:any){
    return this.http.post("http://localhost:8084/user/login",userLogin);
  }
}