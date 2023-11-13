import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Store} from "@ngxs/store";
import {LoginAction} from "./store/action/login.action";
import {LoginState} from "./store/state/login.state";

@Injectable()
export class LoginInterceptor implements HttpInterceptor {

  constructor(private store:Store) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const loginState = this.store.selectSnapshot(LoginState)
    const basicAuth = `Basic ${btoa(`${loginState.UserName}:${loginState.Password}`)}`;
    const modifiedRequest = request.clone({
      setHeaders: {
        Authorization:basicAuth
      },
      
    })
    return next.handle(modifiedRequest);
  }
}
