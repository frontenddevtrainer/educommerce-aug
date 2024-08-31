import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { CollectionsService } from './services/collections.service';
import { CommonModule } from '@angular/common';
import { CreateCollectionComponent } from './components/forms/create-collection/create-collection.component';
import { UserService } from './services/user.service';

@Component({
  selector: 'edu-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    HeroBannerComponent,
    CollectionsComponent,
    CommonModule,
    CreateCollectionComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  private _user = inject(UserService);

  ngOnInit(): void {
    this._user.whoiam();
  }
}
