import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'edu-create-collection-template',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-collection-template.component.html',
  styleUrl: './create-collection-template.component.css',
})
export class CreateCollectionTemplateComponent {

  formData = {
    name : "Tech",
    heading: "Electronics",
    image: "http://placeholderimage.com"
  }

  addCollection(form: any) {
    console.log(form, this.formData);
  }
}
