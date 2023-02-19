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
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
