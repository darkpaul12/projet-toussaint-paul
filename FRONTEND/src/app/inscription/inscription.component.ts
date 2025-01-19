import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ApiService } from "../api.service";
import { PasswordMatchValidator } from './validators';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  accountCreationForm: FormGroup;
  validation: boolean = false;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) {
    // Initialisation du formulaire avec des validations plus strictes
    this.accountCreationForm = this.formBuilder.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(/^[A-Za-z0-9]+$/)
        ]
      ],
      // lastname : Lettres (avec accents) uniquement, pas d'espace ni de tiret
      lastname: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[A-Za-zÀ-ÿ]+$/) 
        ]
      ],
      // firstname : Lettres (avec accents) uniquement, pas d'espace ni de tiret
      firstname: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[A-Za-zÀ-ÿ]+$/)
        ]
      ],
      address: ['', Validators.required],
      postal: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\d{5}$/)
        ]
      ],
      city: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[A-Za-zÀ-ÿ]+$/)
        ]
      ],
      gender: ['', Validators.required],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\d{10}$/)
        ]
      ],
      mail: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6)
        ]
      ],
      confirmpassword: ['', Validators.required]
    }, {
      validators: PasswordMatchValidator // <-- on applique notre validateur ici
    });
  }

  // Getters pour simplifier l'accès dans le HTML
  get username() {
    return this.accountCreationForm.get('username');
  }

  get lastname() {
    return this.accountCreationForm.get('lastname');
  }

  get firstname() {
    return this.accountCreationForm.get('firstname');
  }

  get address() {
    return this.accountCreationForm.get('address');
  }

  get postal() {
    return this.accountCreationForm.get('postal');
  }

  get city() {
    return this.accountCreationForm.get('city');
  }

  get gender() {
    return this.accountCreationForm.get('gender');
  }

  get phone() {
    return this.accountCreationForm.get('phone');
  }

  get mail() {
    return this.accountCreationForm.get('mail');
  }

  get password() {
    return this.accountCreationForm.get('password');
  }

  get confirmpassword() {
    return this.accountCreationForm.get('confirmpassword');
  }

  // Méthode d'inscription
  Inscription() {
    if (this.accountCreationForm.valid) {
      const {
        username, lastname, firstname, address,
        postal, city, gender, phone, mail, password, confirmpassword
      } = this.accountCreationForm.value;

      if (password === confirmpassword) {
        this.apiService.CreateUser(username, firstname, lastname, address, postal, city, gender, phone, mail, password, confirmpassword).subscribe({
          next: () => {
            this.validation = true;
            console.log('Utilisateur créé avec succès.');
          },
          error: (err) => {
            console.error('Erreur lors de la création de l\'utilisateur', err);
          }
        });
      } else {
        console.error("Les mots de passe ne correspondent pas.");
        this.accountCreationForm.get('confirmpassword')?.setErrors({ mismatch: true });
      }
    } else {
      console.error("Veuillez corriger les erreurs dans le formulaire.");
      this.accountCreationForm.markAllAsTouched(); // Force l'affichage des erreurs
    }
  }

  ngOnInit() {
    // Pour tout initialiser au démarrage
  }
}
