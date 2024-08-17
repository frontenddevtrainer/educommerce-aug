import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'edu-create-collection-template',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './create-collection-template.component.html',
  styleUrl: './create-collection-template.component.css',
})
export class CreateCollectionTemplateComponent {

  formData = {
    name : "",
    heading: "",
    image: ""
  }

  addCollection(form: any) {
    console.log(form, this.formData);
  }
}
