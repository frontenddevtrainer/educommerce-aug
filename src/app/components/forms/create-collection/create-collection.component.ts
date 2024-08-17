import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CollectionsService } from '../../../services/collections.service';

@Component({
  selector: 'edu-create-collection',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-collection.component.html',
  styleUrl: './create-collection.component.css',
})
export class CreateCollectionComponent implements OnInit {
  form!: FormGroup;

  fb: FormBuilder = inject(FormBuilder);
  _collections = inject(CollectionsService)

  ngOnInit(): void {
    this.form = this.fb.group({
      category: ['', [Validators.required, Validators.max(10)]],
      heading: [''],
      image: [''],
      icon: [''],
    });

    this.form.get("image")?.valueChanges.subscribe((value)=>{
      const iconControl = this.form.get("icon");
      if(value) {
        iconControl?.setValidators([Validators.required])
      }
      else {
        iconControl?.clearValidators();
      }
      iconControl?.updateValueAndValidity();
    })
  }

  addCollection(){
    console.log(this.form);
    // this._collections.createCollection(this.form.value)
  }
}
