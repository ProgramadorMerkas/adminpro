import { NgModule, Component } from '@angular/core';
import { NgModel } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { PuntosRepartidosComponent } from './reportes/puntos-repartidos/puntos-repartidos.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

const routes = [

    {path:'dashboard' , component: PagesComponent, 

        children: [
            {path:'' , component:DashboardComponent , data:{titulo:'Dashboard'}},
            {path:'puntos-repartidos' , component: PuntosRepartidosComponent , data:{titulo:'Puntos Repartidos por aliado merkas'}},
            {path:'account-settings' , component:AccountSettingsComponent , data:{titulo:'Configuración de Cuenta'}}
        ]
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]

})
export class PagesRoutingModules {}