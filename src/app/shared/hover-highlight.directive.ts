import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[hoverHighlight]'
})
export class HoverHighlightDirective {

  constructor(public elementRef: ElementRef) { }
  @Input('color') color: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.elementRef.nativeElement.style.backgroundColor = this.color;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.elementRef.nativeElement.style.backgroundColor = 'inherit';
  }

}
