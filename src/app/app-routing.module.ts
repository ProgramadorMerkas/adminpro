import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModules } from './pages/pages-routing';

const routes:Routes = [
    {path:''  , redirectTo: '/dashboard' , pathMatch: 'full'},

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes , {useHash: true}),
    PagesRoutingModules,
    
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
