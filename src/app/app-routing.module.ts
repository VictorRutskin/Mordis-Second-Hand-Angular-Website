import { MainPageComponent } from './Pages/main-page/main-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductPage1Component } from './Pages/add-product-page1/add-product-page1.component';

const routes: Routes = [
  { path: 'Home', component: MainPageComponent },
  { path: 'NewListing', component: AddProductPage1Component },

  // otherwise redirect to home
  { path: '**', redirectTo: 'Home' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
