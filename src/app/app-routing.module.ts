import { SingleItemPageComponent } from './Pages/single-item-page/single-item-page.component';
import { OtherPageComponent } from './Pages/other-page/other-page.component';
import { FurniturePageComponent } from './Pages/furniture-page/furniture-page.component';
import { ElectronicsPageComponent } from './Pages/electronics-page/electronics-page.component';
import { ClothingPageComponent } from './Pages/clothing-page/clothing-page.component';
import { AddFinishPageComponent } from './Pages/add-finish-page/add-finish-page.component';
import { MainPageComponent } from './Pages/main-page/main-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductPage1Component } from './Pages/add-product-page1/add-product-page1.component';
import { AddProductPage2Component } from './Pages/add-product-page2/add-product-page2.component';
import { AddProductPage3Component } from './Pages/add-product-page3/add-product-page3.component';

const routes: Routes = [
  { path: 'Home', component: MainPageComponent },
  { path: 'Clothing', component: ClothingPageComponent },
  { path: 'Electronics', component: ElectronicsPageComponent },
  { path: 'Furniture', component: FurniturePageComponent },
  { path: 'Other', component: OtherPageComponent },
  
  { path: 'item/:id', component: SingleItemPageComponent },

  { path: 'NewListing1', component: AddProductPage1Component },
  { path: 'NewListing2', component: AddProductPage2Component },
  { path: 'NewListing3', component: AddProductPage3Component },
  { path: 'NewListingFinish', component: AddFinishPageComponent},

  { path: 'NewListing1/:data', component: AddProductPage1Component },
  { path: 'NewListing2/:data', component: AddProductPage2Component },
  { path: 'NewListing3/:data', component: AddProductPage3Component },


  // otherwise redirect to home
  { path: '**', redirectTo: 'Home' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
