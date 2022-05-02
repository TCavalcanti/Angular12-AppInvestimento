import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { ClientsNewComponent } from './clients-new/clients-new.component';

const routes: Routes = [

  {path:'', component:ClientsListComponent},
  {path:'new', component:ClientsNewComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
