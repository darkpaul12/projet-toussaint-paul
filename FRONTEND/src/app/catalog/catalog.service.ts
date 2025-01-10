import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment.development";
import {Product} from "../../assets/models/product";

@Injectable()
export class CatalogService {

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<Product[]> {
    return this.http.get<any[]>(environment.backendProduit)
  }
}
