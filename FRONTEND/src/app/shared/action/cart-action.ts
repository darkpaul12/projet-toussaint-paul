import {Product} from "../../../assets/models/product";

export class AddProduct {
  static readonly type = '[Produit] Add';
  constructor(public payload: Product) {
  }
}

export class DelProduct {
  static readonly type = '[Product] Del';
  constructor(public payload: Product) {
  }
}

export class DelAll {
  static readonly type = '[Product] DelAll';
  constructor() {
  }
}
