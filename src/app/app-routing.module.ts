import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { LoginComponent } from './security/login/login.component';

const routes: Routes = [

  {path:'login', component:LoginComponent},
  
  {
    path:'', component:LayoutComponent,
    children:[
      {path:'', component:HomeComponent}
      // {path:'clients', component:HomeComponent}
    ]
  },

  {path:'**', redirectTo:'login'}  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
