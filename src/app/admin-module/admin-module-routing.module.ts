import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from '../main-module/main-components/footer/footer.component';
import { HeaderComponent } from '../main-module/main-components/header/header.component';
import { HomeComponent } from '../main-module/main-components/home/home.component';
import { AdminModuleComponent } from './admin-module.component';

const routes: Routes = [{ path: '', component: AdminModuleComponent, children:[
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'header', component: HeaderComponent},
  {path:'footer', component: FooterComponent}
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }
