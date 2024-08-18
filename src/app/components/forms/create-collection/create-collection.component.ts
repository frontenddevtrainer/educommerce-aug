import { Component, inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CollectionsService } from '../../../services/collections.service';
import { CommonModule } from '@angular/common';
import { emailValidator } from '../../../validators/email.validator';
import { match } from '../../../validators/match.validator';

@Component({
  selector: 'edu-create-collection',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-collection.component.html',
  styleUrl: './create-collection.component.css',
})
export class CreateCollectionComponent implements OnInit {
  form!: FormGroup;

  fb: FormBuilder = inject(FormBuilder);
  _collections = inject(CollectionsService);

  ngOnInit(): void {
    this.form = this.fb.group(
      {
        category: ['', [Validators.required, Validators.max(10)]],
        heading: [''],
        image: [''],
        icon: [''],
        email: ['', [Validators.required, emailValidator]],
        password: [''],
        confirmPassword: [''],
      },
      { validators : [match('password', 'confirmPassword')] }
    );

    this.form.get('email')?.valueChanges.subscribe(() => {
      console.log(this.form.get('email'));
    });

    this.form.get('image')?.valueChanges.subscribe((value) => {
      const iconControl = this.form.get('icon');
      if (value) {
        iconControl?.setValidators([Validators.required]);
      } else {
        iconControl?.clearValidators();
      }
      iconControl?.updateValueAndValidity();
    });
  }

  addCollection() {
    console.log(this.form);
    // this._collections.createCollection(this.form.value)
  }

  get emailControl(): AbstractControl | null {
    return this.form.get('email');
  }

  get passworldControl(): AbstractControl | null {
    return this.form.get('password');
  }
}
