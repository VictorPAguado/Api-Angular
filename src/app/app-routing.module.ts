import { MainProdComponent } from './main-prod/main-prod.component';
import { MainGestionComponent } from './main-gestion/main-gestion.component';
import { MainComponent } from './main/main.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "home", component: MainComponent},
  {path: "prods", component: MainProdComponent},
  {path: "gestion", component: MainGestionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
