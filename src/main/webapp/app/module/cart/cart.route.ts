import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Route, CanActivate } from '@angular/router';

import { JhiPaginationUtil } from 'ng-jhipster';
import { CartComponent } from './cart.component';

@Injectable()
export class CardResolvePagingParams implements Resolve<any> {

    constructor(private paginationUtil: JhiPaginationUtil) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        return {
            page: this.paginationUtil.parsePage(page),
        }
    }
}

export const cartRoute: Route = {
    path: 'cart',
    component: CartComponent,
    resolve: {
        'pagingParams': CardResolvePagingParams
    },
    data: {
        authorities: [],
        pageTitle: 'jhprojApp.newlink.home.title'
    }

}
