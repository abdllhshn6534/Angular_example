import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardformComponent } from './cardform/cardform.component';
import {ReactiveFormsModule} from "@angular/forms";
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    CardformComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  exports:[
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
