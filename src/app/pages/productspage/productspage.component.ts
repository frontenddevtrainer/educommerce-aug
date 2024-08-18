import { Component } from '@angular/core';
import { HighlightDirective } from '../../directives/highlight.directive';
import { CapitalisePipe } from '../../pipes/capitalise.pipe';

@Component({
  selector: 'edu-productspage',
  standalone: true,
  imports: [HighlightDirective, CapitalisePipe],
  templateUrl: './productspage.component.html',
  styleUrl: './productspage.component.css'
})
export class ProductspageComponent {
  heading = "technology and cars"
} 
