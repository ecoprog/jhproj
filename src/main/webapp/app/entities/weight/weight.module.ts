import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhprojSharedModule } from '../../shared';
import { JhprojAdminModule } from '../../admin/admin.module';
import {
    WeightService,
    WeightPopupService,
    WeightComponent,
    WeightDetailComponent,
    WeightDialogComponent,
    WeightPopupComponent,
    WeightDeletePopupComponent,
    WeightDeleteDialogComponent,
    weightRoute,
    weightPopupRoute,
} from './';

const ENTITY_STATES = [
    ...weightRoute,
    ...weightPopupRoute,
];

@NgModule({
    imports: [
        JhprojSharedModule,
        JhprojAdminModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        WeightComponent,
        WeightDetailComponent,
        WeightDialogComponent,
        WeightDeleteDialogComponent,
        WeightPopupComponent,
        WeightDeletePopupComponent,
    ],
    entryComponents: [
        WeightComponent,
        WeightDialogComponent,
        WeightPopupComponent,
        WeightDeleteDialogComponent,
        WeightDeletePopupComponent,
    ],
    providers: [
        WeightService,
        WeightPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhprojWeightModule {}
