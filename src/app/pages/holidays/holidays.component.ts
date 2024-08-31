import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'edu-holidays',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './holidays.component.html',
  styleUrl: './holidays.component.css',
})
export class HolidaysComponent {}
