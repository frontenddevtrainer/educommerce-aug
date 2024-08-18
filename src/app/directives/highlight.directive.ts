import {
  Directive,
  ElementRef,
  HostListener,
  inject,
  OnInit,
} from '@angular/core';

// [] = attr
// . = class
// # = id

@Directive({
  selector: '[highlight]',
  standalone: true,
})
export class HighlightDirective implements OnInit {
  private el = inject(ElementRef);

  // constructor(private el: ElementRef) {
  //   console.log(el)
  // }

  @HostListener('mouseover') mouseover() {
    (this.el.nativeElement as HTMLElement).style.backgroundColor = 'red';
  }

  @HostListener('mouseout') mouseout() {
    (this.el.nativeElement as HTMLElement).style.backgroundColor = '';
  }

  ngOnInit(): void {
    console.log(this.el);
  }
}
