import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[highlightDirec]'
})
export class HighlightDirective {

    // @Input('highlightDirec') hightlightColor: string;
    @Input('highlightDirec') hightlightColor: string;
    @Input() defaultColor: string;

    constructor( private el: ElementRef) {}

    @HostListener('mouseenter')
    onMouseEnter() {
        this.highlight(this.hightlightColor || this.defaultColor || 'white');
    }

    @HostListener('mouseleave')
    onMouseLeave() {
        this.highlight(null);
    }

    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }
}
