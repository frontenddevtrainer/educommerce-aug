import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

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

@Directive({
  selector: '[match]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MatchValidatorDirective,
      multi: true,
    },
  ],
})
export class MatchValidatorDirective implements Validator {
  @Input('match') controlName: string[] = [];

  validate(form: AbstractControl): ValidationErrors | null {
    return match(this.controlName[0], this.controlName[1])(form);
  }
}
