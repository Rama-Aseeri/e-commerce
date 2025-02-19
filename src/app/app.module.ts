import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { JewelryComponent } from './jewelry/jewelry.component';
import { WomensClothingComponent } from './womens-clothing/womens-clothing.component';
import { MenClothingComponent } from './men-clothing/men-clothing.component';
import { BillingComponent } from './billing/billing.component';


import { RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { PaynowComponent } from './paynow/paynow.component';  // Add this import

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ElectronicsComponent,
    JewelryComponent,
    WomensClothingComponent,
    MenClothingComponent,
    BillingComponent,
    DetailsComponent,
    PaynowComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
