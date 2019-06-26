import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { KnowYourCompanyComponent } from './know-your-company/know-your-company.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
{
  path: '', redirectTo: '/home', pathMatch: 'full' 
},
{
  path:'menu', component: MenuComponent 
},
{
  path:'home', component: HomeComponent
},
{
  path:'know-your-company', component: KnowYourCompanyComponent
},
{
  path:'login', component:LoginComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 



}
