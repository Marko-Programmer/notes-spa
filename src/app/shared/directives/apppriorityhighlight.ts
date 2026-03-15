import { Directive, OnInit, Renderer2, ElementRef, inject, Input} from '@angular/core'; 

@Directive({
  selector: '[appPriorityHighlight]',
})
export class appPriorityHighlight implements OnInit{

    private el = inject(ElementRef);
    private renderer = inject(Renderer2);

    @Input('appPriorityHighlight') priority!: string;

    ngOnInit() {
        if (this.priority === 'high') { 
            this.renderer.addClass(this.el.nativeElement, 'priority-high-impact'); 
        }
    }

}
