import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {NgxsModule} from "@ngxs/store";
import {CartState} from "../shared/states/cart-state";
import {CatalogComponent} from "./catalog.component";
import {CartComponent} from "../cart/cart.component";
import {SearchService} from "./search.service";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxsModule.forFeature([CartState]),
  ],
})
export class CatalogModule { }
