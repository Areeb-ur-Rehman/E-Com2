import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainModuleRoutingModule } from './main-module-routing.module';
import { MainModuleComponent } from './main-module.component';
import { HomeComponent } from './main-components/home/home.component';
import { HeaderComponent } from './main-components/header/header.component';
import { FooterComponent } from './main-components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainModuleComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
   
  ],
  imports: [
    CommonModule,
    MainModuleRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class MainModuleModule { }
