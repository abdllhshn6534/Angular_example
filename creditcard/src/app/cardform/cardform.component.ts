import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cardform',
  templateUrl: './cardform.component.html',
  styleUrls: ['./cardform.component.css']
})
export class CardformComponent implements OnInit {
  cardForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    cardnumber: new FormControl(null),
    expiration: new FormControl(null),
    securityCode: new FormControl(null),

  })

  constructor() { }

  ngOnInit(): void {
  }

  showErrors(controlName: string) {
    const control = this.cardForm.get(controlName);
    return control && control.dirty && control.touched && control.errors;
  }
}
