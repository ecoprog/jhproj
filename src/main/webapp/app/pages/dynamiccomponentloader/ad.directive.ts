import { Directive, ViewContainerRef } from '@angular/core';
/* This class will inject ViewContainerRef to gain access to the view container of the element that
   will host the dynamically added componnent. */
@Directive ({
    selector: '[adHost]',
})
export class AdDirective {
    constructor(public viewContainerRef: ViewContainerRef) {}
}
