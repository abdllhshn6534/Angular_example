import {Action, Selector, State, StateContext} from "@ngxs/store";
import {LoginAction} from "../action/login.action"
import {Injectable} from "@angular/core";
import {LoginService} from "../../../login.service";

export interface LoginStateModel {
  UserName:string,
  Password:string,
}

@State<LoginStateModel>({
  name:'AuthState',
  defaults:{
    UserName:'',
    Password:''
  },
})
@Injectable()
export class LoginState{
  constructor(private loginService:LoginService) {
  }
  @Selector()
  public static getState({UserName}:LoginStateModel):string{
    return UserName
  }

  @Action(LoginAction)
  login({patchState}:StateContext<LoginStateModel>,{userName, password}:LoginAction){
        return this.loginService.loginUser(userName,password).subscribe(
          (response) => {
            console.log('giriş başarılı',response)
          },
          (error) =>{
            console.log('giriş başarısız',error)
          }
        )
  }
}
