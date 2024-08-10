import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'edu-hero-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-banner.component.html',
  styleUrl: './hero-banner.component.css',
})
export class HeroBannerComponent {
  @Input() heading: string = '';
  @Input() caption!: string;
  @Input() buttonText: string | null = null;
  @Input() images: string[] = [];

  @Output() buttonAction: EventEmitter<string> = new EventEmitter();

  handleButtonClick(){
    this.buttonAction.emit()
  }
}
