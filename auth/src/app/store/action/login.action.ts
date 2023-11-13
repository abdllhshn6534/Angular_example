export class LoginAction {
  static readonly type:"[AUTH] LOGIN";
  constructor(public email:string | null , public password:string | null) {
  }
}
