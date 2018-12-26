

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { PassengerComponent } from './pages/passenger/passenger.component';

const routes: Routes = [
	{path: '', redirectTo: 'passenger', pathMatch :"full"},
	{path:'passenger', component: PassengerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
