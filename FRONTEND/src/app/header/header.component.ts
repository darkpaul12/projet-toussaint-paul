import { Component } from '@angular/core';
import {Select} from "@ngxs/store";
import {ConnectionState} from "../shared/states/connection-state";
import {Observable} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  // @ts-ignore
  @Select(ConnectionState.getConnectionStatus) connectionStatus: Observable<boolean>;

}
