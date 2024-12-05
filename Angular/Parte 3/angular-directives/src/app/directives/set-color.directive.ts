import { Directive, effect, ElementRef, HostBinding, inject, input, signal } from '@angular/core';

@Directive({
  selector: '[setColor]',
  host: {
    '[style.backgroundColor]': 'color()',
    '[style.color]': 'textColor()',
    '(click)': 'toggleTextColor()'
  }
})
export class SetColorDirective {
  color = input('yellow', {alias: 'setColor'});
  textColor = signal('black');

  toggleTextColor() {
    this.textColor.update(c => c === 'black' ? 'white' : 'black');
  }
}
