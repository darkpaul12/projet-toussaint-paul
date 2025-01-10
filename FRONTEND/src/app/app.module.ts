import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ConnectionComponent } from './connection/connection.component';
import { LandingComponent } from './landing/landing.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { CatalogComponent } from './catalog/catalog.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ApiService} from "./api.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {NgxsModule} from "@ngxs/store";
import {CartState} from "./shared/states/cart-state";
import {NgOptimizedImage} from "@angular/common";
import {ConnectionState} from "./shared/states/connection-state";
import {SearchService} from "./catalog/search.service";
import { CharactersComponent } from './characters/characters.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ConnectionComponent,
    LandingComponent,
    InscriptionComponent,
    AboutComponent,
    CartComponent,
    CatalogComponent,
    CharactersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxsModule.forRoot([CartState, ConnectionState]),
    NgOptimizedImage
  ],
  providers: [
    ApiService,
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
