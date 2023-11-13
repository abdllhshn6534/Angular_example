import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListsRoutingModule } from './lists-routing.module';
import { ListsHomeComponent } from './lists-home/lists-home.component';
import { StatisticComponent } from './statistic/statistic.component';
import {SharedModule} from "../shared/shared.module";
import { ItemlistComponent } from './itemlist/itemlist.component';


@NgModule({
  declarations: [
    ListsHomeComponent,
    StatisticComponent,
    ItemlistComponent
  ],
  imports: [
    CommonModule,
    ListsRoutingModule,
    SharedModule
  ]
})
export class ListsModule { }
