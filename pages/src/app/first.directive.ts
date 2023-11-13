import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFirst]'
})
export class FirstDirective {

  constructor(private element:ElementRef) {
    this.element.nativeElement.style.backgroundColor = 'red'
  }

}
