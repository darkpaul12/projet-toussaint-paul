import { AbstractControl, ValidationErrors } from '@angular/forms';

export function PasswordMatchValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password');
  const confirmPassword = control.get('confirmpassword');

  if (!password || !confirmPassword) {
    return null; // On ne fait rien si l'un des champs n'existe pas
  }

  // Vérifie si les valeurs sont différentes
  if (password.value !== confirmPassword.value) {
    // On définit une erreur au niveau du formGroup
    confirmPassword.setErrors({ mismatch: true });
    return { mismatch: true };
  } else {
    // Si elles correspondent, on enlève l'erreur 'mismatch' si elle existe
    if (confirmPassword.hasError('mismatch')) {
      confirmPassword.setErrors(null);
    }
    return null;
  }
}
