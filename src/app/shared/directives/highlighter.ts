import { Directive, HostListener, inject, Input } from '@angular/core';
import { ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlighter]',
})
export class Highlighter {
  private el = inject(ElementRef);

  @Input() HighlightColor = 'yellow'
  
  @HostListener('mouseenter') onMouseEnter(){
    this.highlight(this.HighlightColor);
  }

    @HostListener('mouseleave') onMouseLeave(){ 
    this.highlight(null);
  }

  private highlight(color : string | null){
    this.el.nativeElement.style.backgroundColor = color;
  }
}
