import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name='';
  date: string='';
  money: number= 0;
  height: number=0;

  lessons = {
    name:'Math',
    subject:'NaturalNumber',
    currencPoint:65
  }
  miles: number =0
  onNameChange(value:string){
    this.name = value;
  }

  oneDateChange(value:string){
    this.date= value
  }

  oneMoneyChange(value:string){
    this.money=parseFloat(value)
  }

  oneHeightChange(value:string){
    this.height=parseFloat(value)
  }

  oneMilsChange(value:string){
    this.miles=parseFloat(value)
  }
}
