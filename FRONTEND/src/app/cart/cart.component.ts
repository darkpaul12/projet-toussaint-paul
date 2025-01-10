import {Component, OnInit} from '@angular/core';
import {CartState} from "../shared/states/cart-state";
import {CartStateModel} from "../shared/states/cart-state-model";
import {Select, Store} from "@ngxs/store";
import {Observable} from "rxjs";
import {Product} from "../../assets/models/product";
import {DelAll, DelProduct} from "../shared/action/cart-action";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  constructor(private store: Store) {
  }
  // @ts-ignore
  @Select(CartState.getListProducts) list$: Observable<Product[]>;

  delCart(p: Product): void {
    this.store.dispatch(new DelProduct(p));
  }

  delAll(): void {
    this.store.dispatch(new DelAll());
  }
  ngOnInit() {
  }
}
