import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {of} from "rxjs";
import {environment} from "../../environments/environment.development";

@Injectable()
export class SearchService {

  constructor(private http: HttpClient) { }

  Search(input: string) {
    return this.http.get(
      environment.backendProduit + "?name=" + input
    );
  }
}
