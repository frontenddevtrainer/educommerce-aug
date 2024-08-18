import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatchValidatorDirective } from '../../../validators/match.validator';

@Component({
  selector: 'edu-create-collection-template',
  standalone: true,
  imports: [FormsModule, CommonModule, MatchValidatorDirective],
  templateUrl: './create-collection-template.component.html',
  styleUrl: './create-collection-template.component.css',
})
export class CreateCollectionTemplateComponent {

  formData = {
    name : "",
    heading: "", 
    image: "",
    password : "",
    confirmPassword: ""
  }

  addCollection(form: any) {
    console.log(form, this.formData);
  }
}
