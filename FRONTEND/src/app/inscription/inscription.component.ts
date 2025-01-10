import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.css'
})
export class InscriptionComponent implements OnInit{
  constructor(private formBuilder: FormBuilder, private apiService : ApiService) {
  }

  accountCreationForm: FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    lastname: ['', Validators.required],
    firstname: ['', Validators.required],
    address: ['', Validators.required],
    postal: ['', Validators.required],
    city: ['', Validators.required],
    gender: ['', Validators.required],
    phone: ['', Validators.required],
    mail: ['', Validators.required],
    password: ['', Validators.required],
    confirmpassword: ['', Validators.required]
  });

  validation: boolean = false;
  Inscription() {
    let username = this.accountCreationForm.get('username');
    let lastname = this.accountCreationForm.get('lastname');
    let firstname = this.accountCreationForm.get('firstname');
    let address = this.accountCreationForm.get('address');
    let postal = this.accountCreationForm.get('postal');
    let city = this.accountCreationForm.get('city');
    let gender = this.accountCreationForm.get('gender');
    let phone = this.accountCreationForm.get('phone');
    let mail = this.accountCreationForm.get('mail');
    let password = this.accountCreationForm.get('password');
    let confirmpassword = this.accountCreationForm.get('confirmpassword');

    this.validation = false;

    if(username && lastname && firstname && address && postal && city && gender && phone && mail && password && confirmpassword) {
      if (password.value == confirmpassword.value) {
        this.apiService.CreateUser(username.value, firstname.value, lastname.value, address.value, postal.value, city.value, gender.value, phone.value, mail.value, password.value, confirmpassword.value).subscribe((c) => {
          this.validation = true;
        });
      }
      else {
        console.error("MDP NE CORRESPONDENT PAS");
      }
    }
    else {
      console.error("SAISIR TOUT LES CHAMPS");
    }
  }

  ngOnInit() {
    this.accountCreationForm = this.formBuilder.group({
      username: ['', Validators.required],
      lastname: ['', Validators.required],
      firstname: ['', Validators.required],
      address: ['', Validators.required],
      postal: ['', Validators.required],
      city: ['', Validators.required],
      gender: ['', Validators.required],
      phone: ['', Validators.required],
      mail: ['', Validators.required],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required]
    })
  }
}
