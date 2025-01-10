import { Component } from '@angular/core';
import {Store, Select} from "@ngxs/store";
import {ConnectionState} from "../shared/states/connection-state";
import {Observable} from "rxjs";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  //@ts-ignore
  @Select(ConnectionState.getConnectionStatus) connectionStatus: Observable<boolean>;

  constructor() {
  }
}
