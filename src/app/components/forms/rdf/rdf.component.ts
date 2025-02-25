import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { CommonModule } from '@angular/common';

/** Custom Validator for Password Match */
const passwordMatchValidator: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
  const password = group.get('password')?.value;
  const confirmPassword = group.get('confirmPassword')?.value;
  return password === confirmPassword ? null : { mismatch: true };
};

@Component({
  selector: 'app-rdf',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './rdf.component.html',
  styleUrls: ['./rdf.component.css']
})
export class RdfComponent {
  userForm = new FormGroup(
    {
      firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      userName: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_-]{3,15}$/)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
      dob: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required, Validators.minLength(10)]),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      zipCode: new FormControl('', [Validators.required, Validators.pattern(/^\d{5}$/)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required])
    },
    { validators: passwordMatchValidator } // ✅ Apply validator at the form group level
  );

  // Signals for state selection
  states = signal([
    { code: 'NY', name: 'New York' },
    { code: 'CA', name: 'California' },
    { code: 'TX', name: 'Texas' }
  ]);

  /** Helper method to check form control errors */
  hasError(controlName: string, errorName: string): boolean {
    return this.userForm.get(controlName)?.touched && this.userForm.get(controlName)?.hasError(errorName) ? true : false;
  }

  /** Checks if password mismatch error exists */
  hasPasswordMismatch(): boolean {
    return this.userForm.hasError('mismatch');
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form Submitted!', this.userForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
