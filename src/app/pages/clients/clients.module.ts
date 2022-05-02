import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { ClientsNewComponent } from './clients-new/clients-new.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ClientsListComponent,
    ClientsNewComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    ReactiveFormsModule
  ]
})
export class ClientsModule { }
