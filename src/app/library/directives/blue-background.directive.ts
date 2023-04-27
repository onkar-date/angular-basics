import { Directive, ElementRef, HostListener } from '@angular/core';
@Directive({
  selector: '[appBlueBackground]',
})
export class BlueBackgroundDirective {
  constructor(private eleRef: ElementRef) {}

  @HostListener('mouseover') onMouseOver() {
    this.eleRef.nativeElement.style.color = 'green';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.eleRef.nativeElement.style.color = 'black';
  }
}
