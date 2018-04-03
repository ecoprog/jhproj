import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager, JhiParseLinks, JhiPaginationUtil, JhiLanguageService, JhiAlertService} from 'ng-jhipster';

import { CartService } from './cart.service';

@Component({
    selector: 'app-card',
    templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {

    routeData: any;
    page: any;
    previousPage: any;
    reverse: any;
    predicate: any;
    product: number;

    constructor(
        private activateRoute: ActivatedRoute,
        private cartService: CartService,
    ) {
        this.routeData = this.activateRoute.data.subscribe(
            (data) => {
                this.page = data['pagingParams'].page;
                this.previousPage = data['pagingParams'].page;
                this.reverse = data['pagingParams'].ascending;
                this.predicate = data['pagingParams'].predicate;
            }
        );
    }

    ngOnInit() {
        this.product = this.cartService.getCardProduct();
    }

}
