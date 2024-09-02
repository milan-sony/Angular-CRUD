import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { RemoveproductComponent } from './removeproduct/removeproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';

const routes: Routes = [
  {
    path: 'addproduct', component:AddproductComponent
  },
  {
    path: 'viewproduct', component:ViewproductComponent
  },
  {
    path: 'removeproduct', component:RemoveproductComponent
  },
  {
    path: 'updateproduct/:pid', component:UpdateproductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
