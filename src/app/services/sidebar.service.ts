import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor() { }

  menu: any[] = [

    {
      title : 'Dashboard',
      icono : 'mdi mdi-gauge',
      submenu:[ 
      ]

    },
    {
      title:'Reportes',
      icono:'mdi mdi-bullseye',
      submenu:[
        {title:'Puntos repartidos' , url:'puntos-repartidos'} 
        
      ]
    },
  ];
}
