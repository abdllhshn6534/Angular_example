import {LoginStateModel} from "../state/login.state"


export class LoginAction {
  static readonly type  ='[AUTH] LOGIN';

  constructor(public userName:any, public password:any) {
  }
}
