import {Component, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {LoginState, LoginStateModel} from "../module/store/state/login.state";
import {Observable} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private store:Store) {
  }
  @Select(LoginState.getState) Values$: Observable<LoginStateModel> | any;


}
