import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private signUpUrl = "http://localhost:3003/api/user"
  private loginUrl = "http://localhost:3003/api/auth "

  constructor(private http: HttpClient) { }

  //observable- request
  signUpUser(user:any){
  return this.http.post<any>(this.signUpUrl,user)
  }
  
 
}
