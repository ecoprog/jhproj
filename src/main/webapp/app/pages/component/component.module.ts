import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhprojSharedModule } from '../../shared/shared.module';
import { RoutingService } from '../../shared/routing/routing.service';
import { JhprojAdminModule } from '../../admin/admin.module';
import {
    componentRoute,
    ComponentResolvePagingParams,
    ComponentService,
    ComponentComponent,
    ComponentDetailComponent,
    ComponentDialogComponent,
} from './';

const ENTITY_STATES = [
    ...componentRoute,
];

@NgModule({
    imports: [
        JhprojSharedModule,
        JhprojAdminModule,
        // Debug purposes : enableTracing: true
        RouterModule.forRoot(ENTITY_STATES, { enableTracing: true, useHash: true}),
    ],
    declarations: [
        ComponentComponent,
        ComponentDetailComponent,
        ComponentDialogComponent,
    ],
    entryComponents: [
        ComponentComponent,
        // ComponentDetailComponent,
        // ComponentDialogComponent,
    ],
    providers: [
        ComponentService,
        RoutingService,
        ComponentResolvePagingParams,
    ],
    exports: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhprojComponentModule {

    constructor() {}
}
