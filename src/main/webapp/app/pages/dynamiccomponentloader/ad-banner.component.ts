import { Component, AfterViewInit, OnInit, OnDestroy, Input, ViewChild, ComponentFactoryResolver} from '@angular/core';
import { AdDirective } from './ad.directive';
import { AdItem } from './ad.item';
import { AdComponent } from './ad.component';
/* The <ng-template> is a good choice for dynamic components because it doesn't render
   any additional output. */
@Component({
    selector: 'app-add-banner',
    template: `<div class="ad-banner">
                <h3>Advertisements</h3>
                <ng-template adHost></ng-template>
                </div>`
})
export class AdBannerComponent implements AfterViewInit, OnInit, OnDestroy {

    @Input() ads: AdItem[];
    currentAddIndex: number = -1;
    @ViewChild(AdDirective) adHost: AdDirective; 
    subscription: any;
    interval: any;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

    ngOnInit() {
        this.loadComponent();
    }
    ngAfterViewInit() {
        this.getAds();
    }

    ngOnDestroy() {
        clearInterval(this.interval);
    }

    loadComponent() {
        this.currentAddIndex = (this.currentAddIndex + 1) % this.ads.length;
        const adItem = this.ads[this.currentAddIndex];

        // After an ad is selected, it uses a CompanyFactoryResolver to resolve a ComponentFactory
        // for each specific component. The ComponentFactory then creates an instance for each component.
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component)
 
        // Creation of an viewContainerRef that exits on this specific instance of the component.
        const viewContainerRef = this.adHost.viewContainerRef;
        viewContainerRef.clear();

        // To add the component to the template, you call createComponent() on ViewContainerRef
        // which return a reference to a loaded component. Now you can use this reference to
        // interact with the component by assingning to its properties or calling its methods.
        const componentRef = viewContainerRef.createComponent(componentFactory);
        (<AdComponent>componentRef.instance).data = adItem.data;

        // Generally the Angular compiler generates a ComponentFactory for each component that 
        // is referenced in a template. Here are no selector references in the template for
        // dynamic loaded components because the load at runtime.
        // To ensure that the compiler generates a ComponentFactory, add all dynamically components
        // to the ngModule's metadata at the entryComponents array. 
        // app.module (root module or feature module)
    }

    getAds() {
        this.interval = setInterval(() => {
            this.loadComponent();
        }, 5000);
    }
}
