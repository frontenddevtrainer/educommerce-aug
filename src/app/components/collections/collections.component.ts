import { Component, inject } from '@angular/core';
import { CollectionsService, ICollection } from '../../services/collections.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'edu-collections',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './collections.component.html',
  styleUrl: './collections.component.css',
})
export class CollectionsComponent {

  private _collectionsService = inject(CollectionsService);

  // constructor(private _collections: CollectionsService) {}

  collectionList : ICollection[] = this._collectionsService.collections


}
