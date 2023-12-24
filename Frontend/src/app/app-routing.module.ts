import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AcceuilComponent} from "./acceuil/acceuil.component";

const routes: Routes = [
  { path: "", redirectTo:"acceuil-page", pathMatch:"full"},
  { path: "acceuil-page", component: AcceuilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
