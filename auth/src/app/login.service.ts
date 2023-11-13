import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl:string = "https://carrental-v3-backend.herokuapp.com"
  constructor(private http:HttpClient) { }
  login(credential:any){
    return this.http.post(`${this.baseUrl}/login`,credential)
  }
}
