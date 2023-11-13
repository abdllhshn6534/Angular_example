import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TablesHomeComponent} from './tables-home/tables-home.component'
import {BiografiComponent} from "./biografi/biografi.component";
import {CompaniesComponent} from "./companies/companies.component";
import {PartnersComponent} from "./partners/partners.component";

const routes: Routes = [
  {path:'', component:TablesHomeComponent,
   children:[
     {path:'',component:BiografiComponent},
     {path:'companies',component:CompaniesComponent},
     {path:'partners',component:PartnersComponent}

   ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule { }
