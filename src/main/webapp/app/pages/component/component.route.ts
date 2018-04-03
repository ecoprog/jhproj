import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { JhiPaginationUtil } from 'ng-jhipster';
import { UserRouteAccessService } from '../../shared';
import { ComponentComponent } from './component.component';
import { ComponentDetailComponent } from './'
import { ComponentDialogComponent } from './component-dialog.component';

@Injectable()
export class ComponentResolvePagingParams implements Resolve<any> {

    constructor(private paginationUtil: JhiPaginationUtil) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        const sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
        };
    }
}

export const componentRoute: Routes = [
    {
        path: 'component',
        component: ComponentComponent,
        resolve: {
            'pagingParams': ComponentResolvePagingParams
        },
        data: {
            authorities: [],
            pageTitle: 'jhprojApp.component.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'component/:id',
        component: ComponentDetailComponent,
        data: {
            authorities: [],
            pageTitle: 'jhprojApp.component.detail.title',
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'component/:id/edit',
        component: ComponentDialogComponent,
        data: {
            authorities: [],
            pageTitel: 'jhprojApp.component.dialogedit.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'component-new',
        component: ComponentDialogComponent,
        data: {
            authorities: [],
            pageTitle: 'jhprojApp.component.dialog.title'
        },
        canActivate: [UserRouteAccessService]
    }
];
