import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../environments/environment.development";

@Injectable(
  { providedIn: 'root' }
)
export class ApiService {

  constructor(private httpRequest: HttpClient) { }

  public LoginUser(username: string, password: string):
    Observable<any> {
    let connectionData: string;
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    };
    connectionData = 'login=' + username + '&password=' + password;
    return this.httpRequest.post<any>(
      environment.backendConnection,
      connectionData,
      httpOptions
    )
  }

  public CreateUser(username: string, firstname: string, lastname: string, address: string, postal: string, city: string, gender: string, phone: string, mail: string, password: string, confirmpassword: string):
  Observable<any> {
    let creationData: string;
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    };
    creationData = 'login=' + username + '&prenom=' + lastname + '&nom=' + firstname + '&adresse=' + address + '&codepostal=' + postal + '&ville=' + city + '&sexe=' + gender + '&telephone=' + phone + '&email=' + mail + '&password=' + password;
    return this.httpRequest.post<any>(
      environment.backendInscription,
      creationData,
      httpOptions
    )
  }
}
