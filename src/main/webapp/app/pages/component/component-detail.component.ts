import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { Points } from './points.model';
import { ComponentService } from './component.service';

@Component({
    selector: 'app-component-detail',
    templateUrl: './component-detail.component.html'
})
export class ComponentDetailComponent implements OnInit, OnDestroy {

    points: Points;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private componentService: ComponentService,
        private route: ActivatedRoute,
        private location: Location,
        private router: Router,
    ) {}

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
    }

    load(id) {
        this.componentService.find(id).subscribe((points) => {
            this.points = points;
        });
    }

    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
