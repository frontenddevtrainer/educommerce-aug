import { AbstractControl, ValidationErrors } from '@angular/forms';

export function emailValidator(
  control: AbstractControl
): ValidationErrors | null {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const value = control.value;

  if (!value) {
    return null;
  }

  if (emailRegex.test(value)) {
    return null;
  } else {
    return { invalidEmail: true };
  }
}
