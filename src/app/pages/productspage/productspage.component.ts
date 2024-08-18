import { Component } from '@angular/core';
import { HighlightDirective } from '../../directives/highlight.directive';
import { CapitalisePipe } from '../../pipes/capitalise.pipe';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { CustomifDirective } from '../../directives/customif.directive';

@Component({
  selector: 'edu-productspage',
  standalone: true,
  imports: [HighlightDirective, CapitalisePipe, TruncatePipe, CustomifDirective],
  templateUrl: './productspage.component.html',
  styleUrl: './productspage.component.css'
})
export class ProductspageComponent {
  heading = "technology and cars"
} 
