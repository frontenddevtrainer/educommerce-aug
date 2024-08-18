import { AbstractControl, ValidationErrors } from '@angular/forms';

export function match(controlOne: string, controlTwo: string) {
  return function (form: AbstractControl): ValidationErrors | null {
    const controlOneElement = form.get(controlOne);
    const controlTwoElement = form.get(controlTwo);

    if (!controlOneElement || !controlTwoElement) {
      return null;
    }

    if (controlOneElement.value !== controlTwoElement.value) {
      controlOneElement.setErrors({ match: true });
      return { match: true };
    } else {
      controlOneElement.setErrors(null);
      return null;
    }
  };
}
