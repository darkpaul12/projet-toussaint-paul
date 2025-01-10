import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingComponent} from "./landing/landing.component";
import {AboutComponent} from "./about/about.component";
import {CatalogComponent} from "./catalog/catalog.component";
import {ConnectionComponent} from "./connection/connection.component";
import {InscriptionComponent} from "./inscription/inscription.component";
import {CartComponent} from "./cart/cart.component";
import { CharactersComponent } from './characters/characters.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'connection', component: ConnectionComponent },
  { path: 'account-creation', component: InscriptionComponent },
  { path: 'cart', component: CartComponent },
  { path: 'characters', component: CharactersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
