import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { TablasModule } from '../tablas/tablas.module';
import { FormulariosModule } from '../formularios/formularios.module';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    FormulariosModule,
    TablasModule,
  ]
})
export class DashboardModule { }
