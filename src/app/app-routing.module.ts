import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { CurrencyPipe } from '@angular/common'; 
import { JewelryComponent } from './jewelry/jewelry.component';
import { WomensClothingComponent } from './womens-clothing/womens-clothing.component';  // Import your component
import { MenClothingComponent } from './men-clothing/men-clothing.component';
import { BillingComponent } from './billing/billing.component';
import { DetailsComponent } from './details/details.component';









const appRoutes: Routes = [
  { path: '', component: HomeComponent },  // Default route
  { path: 'home', component: HomeComponent } , // Explicit home route
  {path: 'electronics', component: ElectronicsComponent},
  {path: 'home/electronic', component: ElectronicsComponent},
  {path: 'home/jewelry', component: JewelryComponent},
  {path: 'jewelry', component: JewelryComponent},
  { path: "women's clothing", component: WomensClothingComponent },
  { path: "home/women's clothing", component: WomensClothingComponent },
  { path: "men's clothing", component: MenClothingComponent },
  { path: "home/men's clothing", component: MenClothingComponent },
  { path: 'billing', component: BillingComponent } , // Explicit home route
  {path: 'home/details' ,component: DetailsComponent},
  {path: 'details/:id' ,component: DetailsComponent},



  






];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
