import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhprojSharedModule } from '../../shared';
import { JhprojAdminModule } from '../../admin/admin.module';
import {
    NewLinkService,
    NewLinkComponent,
    newlinkRoute,
    NewLinkResolvePagingParams,
    ChildComponent,
    ParentComponent,
} from './';
import { LoggerService } from '../../shared/logger/logger.service';

// Voting
import { VoterComponent } from '../voting/voter.component';
import { VoteTakerComponent } from '../voting/votetaker.component';

// Dynamic component loader
import { AdService } from '../dynamiccomponentloader/ad.service';
import { AdBannerComponent } from '../dynamiccomponentloader/ad-banner.component';
import { HeroJobAdComponent } from '../dynamiccomponentloader/hero-job-ad.component';
import { HeroProfileComponent } from '../dynamiccomponentloader/hero-profile.component';
import { AdDirective } from '../dynamiccomponentloader/ad.directive';

/* Sandboxing */
import { HeroModule } from '../sandboxing/hero.module';
import { HeroBiosComponent } from '../sandboxing/hero-bios.component';
import { HeroBioComponent } from '../sandboxing/hero-bio.component';
// import { LoggerService } from '../../shared/logger/logger.service';
 
const ENTITY_STATES = [
    newlinkRoute,
];

@NgModule({
    imports: [
        JhprojSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { enableTracing: true, useHash: true }),
        HeroModule,
    ],
    declarations: [
        NewLinkComponent,
        VoterComponent,
        VoteTakerComponent,
        ChildComponent,
        ParentComponent,

        // Dynamic component loader
        AdBannerComponent,
        HeroJobAdComponent,
        HeroProfileComponent,
        AdDirective,
    ],
    entryComponents: [

        // Dynamic component loader
        HeroJobAdComponent, 
        HeroProfileComponent,
    ],
    providers: [
        NewLinkService,
        NewLinkResolvePagingParams,
        // Dynamic component loader
        AdService,
        LoggerService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhprojNewLinkModule {
    constructor() {}
}
