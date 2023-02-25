import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/Nav-bar-Components/nav-bar/nav-bar.component';
import { NavBarLogoComponent } from './Components/Nav-bar-Components/nav-bar-logo/nav-bar-logo.component';
import { NavBarClothingComponent } from './Components/Nav-bar-Components/nav-bar-clothing/nav-bar-clothing.component';
import { NavBarElectronicsComponent } from './Components/Nav-bar-Components/nav-bar-electronics/nav-bar-electronics.component';
import { NavBarFurnitureComponent } from './Components/Nav-bar-Components/nav-bar-furniture/nav-bar-furniture.component';
import { NavBarOtherComponent } from './Components/Nav-bar-Components/nav-bar-other/nav-bar-other.component';
import { NavbarInsideTabComponent } from './Components/Nav-bar-Components/navbar-inside-tab/navbar-inside-tab.component';
import { NavbarHeartComponent } from './Components/Nav-bar-Components/navbar-heart/navbar-heart.component';
import { NavbarManComponent } from './Components/Nav-bar-Components/navbar-man/navbar-man.component';
import { NavbarSearchComponent } from './Components/Nav-bar-Components/navbar-search/navbar-search.component';
import { NavbarAddListingComponent } from './Components/Nav-bar-Components/navbar-add-listing/navbar-add-listing.component';
import { MainPageComponent } from './Pages/main-page/main-page.component';
import { MiniIconComponent } from './Components/Mini-icon-components/mini-icon/mini-icon.component';
import { MiniIconClothingComponent } from './Components/Mini-icon-components/mini-icon-clothing/mini-icon-clothing.component';
import { MiniIconElectronicsComponent } from './Components/Mini-icon-components/mini-icon-electronics/mini-icon-electronics.component';
import { MiniIconOtherComponent } from './Components/Mini-icon-components/mini-icon-other/mini-icon-other.component';
import { MiniIconFurnitureComponent } from './Components/Mini-icon-components/mini-icon-furniture/mini-icon-furniture.component';
import { MiniIconTableComponent } from './Components/Mini-icon-components/mini-icon-table/mini-icon-table.component';
import { MainPageSmallTextComponent } from './Components/Text-Components/main-page-small-text/main-page-small-text.component';
import { MainPageTitle1Component } from './Components/Text-Components/main-page-title1/main-page-title1.component';
import { MainPageTitle2Component } from './Components/Text-Components/main-page-title2/main-page-title2.component';
import { ItemCouruselComponent } from './Components/Item-Courusel-Components/item-courusel/item-courusel.component';
import { SingleCouruselItemComponent } from './Components/Item-Courusel-Components/single-courusel-item/single-courusel-item.component';
import { AddProductPage1Component } from './Pages/add-product-page1/add-product-page1.component';
import { AddProductPage2Component } from './Pages/add-product-page2/add-product-page2.component';
import { AddProductPage3Component } from './Pages/add-product-page3/add-product-page3.component';
import { ProgressCirclesComponent } from './Components/progress-circles/progress-circles.component';
import { FormComponent } from './Components/Form-Components/form/form.component';
import { FormsModule } from '@angular/forms';
import { FormContinueBTNComponent } from './Components/Buttons/form-continue-btn/form-continue-btn.component';
import { SmallTextTemplateComponent } from './Components/Text-Components/small-text-template/small-text-template.component';
import { AddImagesFormComponent } from './Components/Form-Components/add-images-form/add-images-form.component';
import { AddFinishPageComponent } from './Pages/add-finish-page/add-finish-page.component';
import { SingleItemComponent } from './Components/single-item/single-item.component';
import { ItemsListComponent } from './Components/items-list/items-list.component';
import { ClothingPageComponent } from './Pages/clothing-page/clothing-page.component';
import { ElectronicsPageComponent } from './Pages/electronics-page/electronics-page.component';
import { FurniturePageComponent } from './Pages/furniture-page/furniture-page.component';
import { OtherPageComponent } from './Pages/other-page/other-page.component';
import { FilterCategoryPipe } from './Pipes/Filter-Category-Pipe/filter-category.pipe';
import { ItemsTemplatePageComponent } from './Pages/items-template-page/items-template-page.component';
import { SingleItemPageComponent } from './Pages/single-item-page/single-item-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavBarLogoComponent,
    NavBarClothingComponent,
    NavBarElectronicsComponent,
    NavBarFurnitureComponent,
    NavBarOtherComponent,
    NavbarInsideTabComponent,
    NavbarHeartComponent,
    NavbarManComponent,
    NavbarSearchComponent,
    NavbarAddListingComponent,
    MainPageComponent,
    MiniIconComponent,
    MiniIconClothingComponent,
    MiniIconElectronicsComponent,
    MiniIconOtherComponent,
    MiniIconFurnitureComponent,
    MiniIconTableComponent,
    MainPageSmallTextComponent,
    MainPageTitle1Component,
    MainPageTitle2Component,
    ItemCouruselComponent,
    SingleCouruselItemComponent,
    AddProductPage1Component,
    AddProductPage2Component,
    AddProductPage3Component,
    ProgressCirclesComponent,
    FormComponent,
    FormContinueBTNComponent,
    SmallTextTemplateComponent,
    AddImagesFormComponent,
    AddFinishPageComponent,
    SingleItemComponent,
    ItemsListComponent,
    ClothingPageComponent,
    ElectronicsPageComponent,
    FurniturePageComponent,
    OtherPageComponent,
    FilterCategoryPipe,
    ItemsTemplatePageComponent,
    SingleItemPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
