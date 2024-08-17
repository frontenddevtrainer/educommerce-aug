import { Component } from '@angular/core';
import { CreateCollectionComponent } from '../../../components/forms/create-collection/create-collection.component';
import { CreateCollectionTemplateComponent } from '../../../components/forms/create-collection-template/create-collection-template.component';

@Component({
  selector: 'edu-create-collection-page',
  standalone: true,
  imports: [CreateCollectionComponent, CreateCollectionTemplateComponent],
  templateUrl: './create-collection-page.component.html',
  styleUrl: './create-collection-page.component.css',
})
export class CreateCollectionPageComponent {}
