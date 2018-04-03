import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager, JhiParseLinks, JhiPaginationUtil, JhiLanguageService, JhiAlertService } from 'ng-jhipster';

import { NewLinkService} from './newlink.service';
import { Principal, LoginModalService, Account } from '../../shared';
import { AdItem } from '../dynamiccomponentloader/ad.item';
import { AdService } from '../dynamiccomponentloader/ad.service';

@Component({
    selector: 'app-newlink',
    templateUrl: './newlink.component.html' 
})
export class NewLinkComponent implements OnInit {
    newLinkString: string;
    account: Account;
    modalRef: NgbModalRef;
    currentAccount: any;
    page: any;
    previousPage: any; 
    predicate: any;
    reverse: any;
    error: any;
    eventSubscriber: Subscription;
    routeData: any;
    color: string;

    // Dynamic component loader
    ads: AdItem[];

    constructor(
        // private parseLinks: JhiParseLinks,
        /// private jhiAlertService: JhiAlertService,
        // private principal: Principal,
        private activatedRoute: ActivatedRoute,
        // private loginModalService: LoginModalService,
        private eventManager: JhiEventManager,

        private newLinkService: NewLinkService,
        // Dynamic component loader
        private adService: AdService,

    ) {
        this.newLinkString = 'NewLink test string.';
        this.routeData = this.activatedRoute.data.subscribe((data) => {
            this.page = data['pagingParams'].page;
            this.previousPage = data['pagingParams'].page;
            this.reverse = data['pagingParams'].ascending;
            this.predicate = data['pagingParams'].predicate;
        });
    }

    ngOnInit() {
        /*
        this.principal.identity().then((account) => {
            this.account = account;
        });
        this.registerAuthenticationSuccess();
        */
        // Dynamic component loader
        this.ads = this.adService.getAds();
    }

    /*
    registerAuthenticationSuccess() {
        this.eventManager.subscribe('authenticationSuccess', (message) => {
            this.principal.identity().then((account) => {
                this.account = account;
            });
        });
    }

    isAuthenticated() {
        return this.principal.isAuthenticated();
    }
    
    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
    */
}
