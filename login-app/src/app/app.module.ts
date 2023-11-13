import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {NgxsModule} from "@ngxs/store";
import {NgxsStoragePluginModule} from "@ngxs/storage-plugin"
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginState} from './module/store/state/login.state';
import { HomeComponent } from './home/home.component'
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {LoginInterceptor} from "./module/login.interceptor";
@NgModule({
  declarations: [AppComponent, HomeComponent,],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([LoginState]),

    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent],
  providers:[
    {
      provide:HTTP_INTERCEPTORS,
      useClass: LoginInterceptor,
      multi:true
    }
  ]
})
export class AppModule {}
