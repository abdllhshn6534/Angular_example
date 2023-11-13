import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngxs/store";
import {LoginAction} from "./module/store/action/login.action"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form = new FormGroup({
    userName: new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
})
  constructor(private store:Store) {}

  onSubmitForm(){
    if (this.form.valid){
      const {userName,password}=this.form.value;
      this.store.dispatch(new LoginAction(userName, password))
    }
  }
}
