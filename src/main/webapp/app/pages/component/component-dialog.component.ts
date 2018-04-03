import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart, Event } from '@angular/router';
import { Location } from '@angular/common';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { Points } from './points.model';
import { ComponentService } from './component.service';
import { User, UserService } from '../../shared';
import { ResponseWrapper } from '../../shared';
import { PointsService } from '../../entities/points/index';
import { RoutingService } from '../../shared/routing/routing.service';
import { Subscription } from 'rxjs/Rx';

@Component({
    selector: 'jhi-component-dialog',
    templateUrl: './component-dialog.component.html'
})
export class ComponentDialogComponent implements OnInit, OnDestroy {

    points: Points;
    isSaving: boolean;
    users: User[];
    dateDp: any;
    routeSub: any;
    previousUrl: any;

    constructor(
        public userService: UserService,
        private componentService: ComponentService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private activatedRoute: ActivatedRoute,
        private location: Location,
        private router: Router,
        private routingService: RoutingService,
    ) {
        this.points = new Points();
            
        // console.log('+++++++++++++++++ ActivatedRouteSnapshot: ' + this.activatedRoute.snapshot.url.join(''));
        // console.log('+++++++++++++++++ ActivatedRouteSnapshot: ' + this.activatedRoute.snapshot.pathFromRoot);
    }

    ngOnInit() {
        if (this.routingService.getCurrentRoute() === undefined) {this.routingService.setCurrentRoute('/component')}
        console.log('+++++++++++++++++ PreviousRoute : ' + this.routingService.getCurrentRoute());
        /*
        this.router.events
        .filter((e) => e instanceof RoutesRecognized)
        .pairwise()
        .subscribe((e: any[]) => {
          console.log(e[0].urlAfterRedirects);
        });*/
        
        this.isSaving = false;
        this.userService.query()
        .subscribe(
            (res: ResponseWrapper) => { this.users = res.json; }, 
            (res: ResponseWrapper) => { this.onError(res.json )}
        );
        this.routeSub = this.activatedRoute.params.subscribe((params) => {
            if (params['id']) {
                this.componentService.find(params['id']).subscribe((points) => {
                    if (points.date) {
                        points.date = {
                            year: points.date.getFullYear(),
                            month: points.date.getMonth(),
                            date: points.date.getDate(),
                        }
                    }
                    this.points = points;
                });
            } else {
                this.points = new Points();
            }
        });             
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }

    save() {
        this.isSaving = true;
        if (this.points.id !== undefined) {
            this.subscribeToSaveResponse(
                this.componentService.update(this.points));
        } else {
            this.subscribeToSaveResponse(
                this.componentService.create(this.points));
        }
        this.router.navigateByUrl(this.routingService.getCurrentRoute());
    }

    private subscribeToSaveResponse(result: Observable<Points>) {
        result.subscribe((res: Points) => this.onSaveSuccess(res), (res: Response) => this.onSaveError());
    }

    private onSaveSuccess(result: Points) {
        this.eventManager.broadcast({name: 'pointsListModificaton', content: 'OK'});
        this.isSaving = false;
        // this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }

    private onError(error: any) {
        this.jhiAlertService.error(error.msg, null, null);
    }

    previousState() {
        // window.history.back();
        this.router.navigateByUrl(this.routingService.getCurrentRoute());
    }

    trackUserById(index: number, item: User) {
        return item.id;
    }
}
