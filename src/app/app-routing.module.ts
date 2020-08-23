import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsymmetricComponent } from "./asymmetric/asymmetric.component";

const routes: Routes = [
  { path: 'asymmetric', component: AsymmetricComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
