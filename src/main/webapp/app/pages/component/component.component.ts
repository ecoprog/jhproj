import { Component, OnInit, OnDestroy, Output, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, ResolveEnd, Event, NavigationStart, RoutesRecognized } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager, JhiParseLinks, JhiPaginationUtil, JhiLanguageService, JhiAlertService } from 'ng-jhipster';
import { ITEMS_PER_PAGE, Principal, ResponseWrapper } from '../../shared';

import { Points } from './points.model';
import { ComponentService } from './component.service';
import { RoutingService } from '../../shared/routing/routing.service';
import { PaginationConfig } from '../../blocks/config/uib-pagination.config';

@Component({
    selector: 'app-component',
    templateUrl: './component.component.html'
})
export class ComponentComponent implements OnInit, OnDestroy, AfterViewInit {

    error: any;
    success: any;
    eventSubscriber: Subscription;
    currentSearch: string;
    currentAccount: any;
    routeData: any;
    itemsPerPage: any;
    links: any;
    totalItems: any;
    page: any;
    reverse: any;
    predicate: any;
    previousPage: any;
    queryCount: any;
    points: Points[];
    private subscription: Subscription;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private eventManager: JhiEventManager,
        private paginationUtil: JhiPaginationUtil,
        private paginationConfig: PaginationConfig,
        private componentService: ComponentService,
        private parseLinks: JhiParseLinks,
        private jhiAlertService: JhiAlertService,
        private principal: Principal,
        private location: Location,
        private routingService: RoutingService,
    ) {
        this.itemsPerPage = ITEMS_PER_PAGE;
        this.routeData = this.activatedRoute.data.subscribe((data) => {
            this.page = data['pagingParams'].page;
            this.previousPage = data['pagingParams'].page;
            this.reverse = data['pagingParams'].ascending;
            this.predicate = data['pagingParams'].predicate;
        });
        this.currentSearch = activatedRoute.snapshot.params['search'] ? activatedRoute.snapshot.params['search'] : '';
    }

    ngOnInit() {
        this.loadAll();
        this.principal.identity(true).then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInPoints();
        this.routingService.setCurrentRoute(this.router.url);
        console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++UrlBegin :' + this.router.url);
    }

    ngOnDestroy() {
        console.log('****************************************************UlrEnd :' + this.routingService.getCurrentRoute());
    }

    ngAfterViewInit() {
        console.log('!!!!!!!!!!!!!!!!!!!!!!! AfterViewInit !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    }

    loadAll() {
        if (this.currentSearch) {
            this.componentService.search({
                page: this.page - 1,
                query: this.currentSearch,
                size: this.itemsPerPage,
                sort: this.sort()
            }).subscribe(
                (res: ResponseWrapper) => this.onSuccess(res.json, res.headers),
                (res: ResponseWrapper) => this.onError(res.json)
            );
            return;
        }

        this.componentService.query({
            page: this.page - 1,
            size: this.itemsPerPage,
            sort: this.sort()
        }).subscribe(
            (res: ResponseWrapper) => this.onSuccess(res.json, res.headers),
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }

    loadPage(page: number) {
        if (page !== this.previousPage) {
            this.previousPage = page;
            this.transition();
        }
    }

    transition() {
        this.router.navigate(['/component'], {queryParams:
            {
                page: this.page,
                size: this.itemsPerPage,
                search: this.currentSearch,
                sort: this.predicate + ',' + (this.reverse ? 'asc' : 'desc')
            }
        });
        
        this.subscription = this.router.events
        .filter((event) => event instanceof NavigationEnd)
        .map(() => this.activatedRoute)
        .subscribe((event) => {
        console.log('++++++++++++++++NavigationEnd:', event);
        console.log('++++++++++++++++Url:' + this.router.url);
        this.routingService.setCurrentRoute(this.router.url);
        this.subscription.unsubscribe();
        });
        
        console.log('...................................... Router events fininished');
        this.loadAll();
        this.router.events
        .filter((event) => event instanceof RoutesRecognized)
        .subscribe((event: Event) => {
            // this.routingService.setCurrentRoute(this.router.url);
            console.log('+++++++++++++++++ RoutesRecognized : ');
        });
        
        /* router.events.forEach((event: NavigationEvent) => {
    if(event instanceof NavigationStart) {
    }
    // NavigationEnd
    // NavigationCancel
    // NavigationError
    // RoutesRecognized
  }); */
    }

    clear() {
        this.page = 0;
        this.currentSearch = '';
        this.router.navigate(['/component', {
            page: this.page,
            sort: this.predicate + ',' + (this.reverse ? 'asc' : 'desc')
        }]);
        this.loadAll();
    }

    search(query) {
        if (!query) {
            return this.clear();
        }
        this.page = 0;
        this.currentSearch = query;
        this.router.navigate(['/component', {
            search: this.currentSearch,
            page: this.page,
            sort: this.predicate + ',' + (this.reverse ? 'asc' : 'desc')
        }]);
        this.loadAll();
    }

    trackId(index: number, item: Points) {
        return item.id;
    }

    registerChangeInPoints() {
        this.eventSubscriber = this.eventManager.subscribe('pointsListModification', (response) => this.loadAll());
    }

    sort() {
        const result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
        if (this.predicate !== 'id') {
            result.push('id');
        }
        return result;
    }

    private onSuccess(data, headers) {
        this.links = this.parseLinks.parse(headers.get('link'));
        this.totalItems = headers.get('X-Total-Count');
        this.queryCount = this.totalItems;
        this.points = data;
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }

}
