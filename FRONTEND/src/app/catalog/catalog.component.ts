import {AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CatalogService} from "./catalog.service";
import {catchError, debounceTime, distinctUntilChanged, fromEvent, map, merge, Observable, of, switchMap} from "rxjs";
import {Product} from "../../assets/models/product";
import {AddProduct} from "../shared/action/cart-action";
import {Select, Store} from "@ngxs/store";
import {ConnectionState} from "../shared/states/connection-state";
import {SearchService} from "./search.service";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css',
  providers: [CatalogService, SearchService]
})
export class CatalogComponent implements OnInit, AfterViewInit {
  // @ts-ignore
  searchField: Observable<any>;
  // @ts-ignore
  model: Observable<any>;
  @ViewChild('searchinput', { static: true }) input!: ElementRef;
  // @ts-ignore
  @Select(ConnectionState.getConnectionStatus) connectionStatus: Observable<boolean>;

  constructor(private catalogService: CatalogService, private store: Store, private service: SearchService) {
    this.model = this.catalogService.getProducts();
  }

  addToCart(p: Product): void {
    this.store.dispatch(new AddProduct(p));
  }

  ngAfterViewInit() {
    this.searchField = fromEvent(this.input.nativeElement, "keyup");

    const loadAllCatalog = this.catalogService.getProducts().pipe(
      catchError(() => {
        return [];
      })
    );

    this.model = merge(
      this.searchField.pipe(
      map((event) => event.target.value),
      debounceTime(300),
      distinctUntilChanged(),

      switchMap((input) => this.service.Search(input).pipe(
        catchError(() => {
          return this.catalogService.getProducts();
        })
      ))
    ),
      loadAllCatalog
    );
  }

  ngOnInit() {

  }

}
