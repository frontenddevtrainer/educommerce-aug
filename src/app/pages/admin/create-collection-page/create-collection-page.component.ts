import { Component } from '@angular/core';
import { CreateCollectionComponent } from "../../../components/forms/create-collection/create-collection.component";

@Component({
  selector: 'edu-create-collection-page',
  standalone: true,
  imports: [CreateCollectionComponent],
  templateUrl: './create-collection-page.component.html',
  styleUrl: './create-collection-page.component.css'
})
export class CreateCollectionPageComponent {

}
