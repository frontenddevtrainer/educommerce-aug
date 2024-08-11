import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
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
      category: [''],
      heading: [''],
      image: [''],
    });
  }

  addCollection(){
    this._collections.createCollection(this.form.value)
  }
}
