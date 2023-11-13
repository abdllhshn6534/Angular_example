import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class LoginService {
    path_url:string = "https://6540f01045bedb25bfc2e488.mockapi.io/login"
  constructor(private http:HttpClient) { }
     loginUser(username:string,password:string):Observable<any>{
      const body = {username, password};
     return this.http.post(this.path_url,body)
     }
}
