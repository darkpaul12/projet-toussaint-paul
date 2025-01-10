import {CartStateModel} from "./cart-state-model";
import {Injectable} from "@angular/core";
import {Action, Selector, State, StateContext} from "@ngxs/store";
import {AddProduct, DelAll, DelProduct} from "../action/cart-action";

@State<CartStateModel>({
  name: 'cart',
  defaults: {
    cart: [],
  }
})
@Injectable()
export class CartState {
  @Selector()
  static getNbProducts(state: CartStateModel) {
    return state.cart.length;
  }

  @Selector()
  static getListProducts(state: CartStateModel) {
    return state.cart;
  }

  @Action(AddProduct)
  add(
    { getState, patchState }: StateContext<CartStateModel>,
    { payload }: AddProduct
  ) {
    const state = getState();
    patchState({
      cart: [...state.cart, payload],
    });
  }

  @Action(DelProduct)
  del(
    { getState, patchState }: StateContext<CartStateModel>,
    { payload }: DelProduct
  ) {
    const state = getState();
    patchState({
      cart: state.cart.filter((x) => !(payload.id == x.id)),
    });
  }

  @Action(DelAll)
  delAll(
    { patchState }: StateContext<CartStateModel>,
  ) {
    patchState({
      cart: [],
    });
  }
}
