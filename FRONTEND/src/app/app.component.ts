import { Component } from '@angular/core';
import {Select} from "@ngxs/store";
import {CartState} from "./shared/states/cart-state";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DragonBallShop';

  // @ts-ignore
  @Select(CartState.getNbProducts) nb: Observable<number>;
  constructor() {
  }
}
