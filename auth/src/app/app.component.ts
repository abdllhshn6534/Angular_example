import { Component } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { LoginService } from "./login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private loginService: LoginService) {}

  onSubmit() {
    // Form elemanlarının değerlerini bir JavaScript nesnesine toplama
    const formData = {
      email: this.form.get('email')?.value,
      password: this.form.get('password')?.value
    };

    return this.loginService.login(formData).subscribe(
      (response) => {
        console.log('Giriş Başarılı', response);
      },
      (error) => {
        console.log('Giriş Başarısız', error);
      }
    );
  }
}
