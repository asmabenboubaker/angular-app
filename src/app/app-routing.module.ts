import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjoutComponent } from './ajout/ajout.component';

import { MedcinComponent } from './medcin/medcin.component';

const routes: Routes = [

  {
    path:'ajouter',
component:AjoutComponent
},
  {
    path:'medcin',
component:MedcinComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
