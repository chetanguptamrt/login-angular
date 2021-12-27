import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  tokenUrl = "http://localhost:8080/token"

  //calling the server to generate token
  generateToken(credentials:any){
    // token generate
    return this.http.post(`${this.tokenUrl}`,credentials)
  }

  loginUser(token:any):boolean {
    localStorage.setItem("token", token);
    return true;
  }
  //to checked that user is login or not
  isLoggedIn():boolean {
    let token = localStorage.getItem("token");
    if(token==undefined || token=="" || token==null){
      return false;
    } else {
      return true;
    }
  }
  //to logout
  logout():void{
    localStorage.removeItem("token")
  }
  //get token
  getToken(){
    return localStorage.getItem("token")
  }
}
