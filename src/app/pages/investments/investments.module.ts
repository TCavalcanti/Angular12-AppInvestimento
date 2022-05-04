import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestmentsRoutingModule } from './investments-routing.module';
import { InvestmentsListByClientComponent } from './investments-list-by-client/investments-list-by-client.component';


@NgModule({
  declarations: [
    InvestmentsListByClientComponent
  ],
  exports:[
    InvestmentsListByClientComponent
  ],
  imports: [
    CommonModule,
    InvestmentsRoutingModule
  ]
})
export class InvestmentsModule { }
