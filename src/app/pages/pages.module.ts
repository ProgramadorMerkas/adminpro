import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { PuntosRepartidosComponent } from './reportes/puntos-repartidos/puntos-repartidos.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import {CalendarModule} from 'primeng/calendar';
import { PaginatorModule } from 'primeng/paginator';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    DashboardComponent,
    PagesComponent,
    PuntosRepartidosComponent,
    AccountSettingsComponent
  ],
  exports:[
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    CalendarModule,
    TableModule,
    PaginatorModule

  ]
})
export class PagesModule { }
