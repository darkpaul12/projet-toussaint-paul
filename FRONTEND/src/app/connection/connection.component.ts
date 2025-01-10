import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../api.service";
import {Select, Store} from "@ngxs/store";
import {ChangeConnectedStatusTrue} from "../shared/action/connection-action";
import {ConnectionState} from "../shared/states/connection-state";
import {Router} from "@angular/router";

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrl: './connection.component.css'
})
export class ConnectionComponent implements OnInit{
  constructor(private formBuilder: FormBuilder, private apiService : ApiService, private store: Store, private router: Router) {
  }

  connectionForm: FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  // @ts-ignore
  @Select(ConnectionState.getConnectionStatus) connectionStatus: Observable<boolean>;

  Connection() {

    let username = this.connectionForm.get('username');
    let password = this.connectionForm.get('password');
    if(username && password) {
      this.apiService.LoginUser(username.value, password.value).subscribe((c) => {
          this.store.dispatch(new ChangeConnectedStatusTrue());
      });
      setTimeout(() => {
        this.router.navigate(['/'])
      }, 1300);
    }
    else {
      console.error("Nom d'utilisateur et/ou mot de passe null !");
    }
  }

  ngOnInit() {
    this.connectionForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
}
