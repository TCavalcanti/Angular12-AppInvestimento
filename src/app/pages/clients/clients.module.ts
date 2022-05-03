import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { ClientsNewComponent } from './clients-new/clients-new.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientsEditComponent } from './clients-edit/clients-edit.component';
import { ClientsViewComponent } from './clients-view/clients-view.component';


@NgModule({
  declarations: [
    ClientsListComponent,
    ClientsNewComponent,
    ClientsEditComponent,
    ClientsViewComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    ReactiveFormsModule
  ]
})
export class ClientsModule { }
