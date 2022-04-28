import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { AuthGuard } from './security/auth.guard';
import { LoginComponent } from './security/login/login.component';

const routes: Routes = [

  {path:'login', component:LoginComponent},
  
  {
    path:'', component:LayoutComponent,
    canActivate:[AuthGuard],
    children:[
      {path:'', component:HomeComponent},
      {path:'clients', loadChildren:()=> import('./pages/clients/clients.module').then(m=>m.ClientsModule)}
    ]
  },

  {path:'**', redirectTo:'login'}  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
