import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { ClientsNewComponent } from './clients-new/clients-new.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientsEditComponent } from './clients-edit/clients-edit.component';


@NgModule({
  declarations: [
    ClientsListComponent,
    ClientsNewComponent,
    ClientsEditComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    ReactiveFormsModule
  ]
})
export class ClientsModule { }
