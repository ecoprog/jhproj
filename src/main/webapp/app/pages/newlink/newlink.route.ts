import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Route, CanActivate } from '@angular/router';

import { JhiPaginationUtil } from 'ng-jhipster';
import { NewLinkComponent } from './newlink.component';

@Injectable()
export class NewLinkResolvePagingParams implements Resolve<any> {

    constructor(private paginationUtil: JhiPaginationUtil) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        return {
            page: this.paginationUtil.parsePage(page),
        };
    }
}

export const newlinkRoute: Route = {
        path: 'newlink',
        component: NewLinkComponent,
        resolve: {
            'pagingParams': NewLinkResolvePagingParams
        },
        data: {
            authorities: [],
            pageTitle: 'jhprojApp.newlink.home.title'
        }
};
