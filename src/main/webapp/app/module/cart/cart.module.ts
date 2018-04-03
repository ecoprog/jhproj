import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhprojSharedModule } from '../../shared';
import { JhprojAdminModule } from '../../admin/admin.module';
import { 
    CartComponent,
    cartRoute,
    CartService,
    CardResolvePagingParams,
} from './';
import { LoggerService } from '../../shared/logger/logger.service';

const ENTITY_STATES = [
    cartRoute,
];

@NgModule({
    imports: [
        JhprojSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { enableTracing: true, useHash: true}),
    ],
    declarations: [
        CartComponent,
    ],
    entryComponents: [],
    providers: [
        CartService,
        CardResolvePagingParams,
        LoggerService,
    ],
    exports: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhprojCartModule {
    constructor() {}
}
