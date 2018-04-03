import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhprojSharedModule } from '../../shared';
import { HeroBiosComponent } from './hero-bios.component';
import { HeroBioComponent } from './hero-bio.component';
import { LoggerService } from '../../shared/logger/logger.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
    imports: [JhprojSharedModule, FormsModule, HttpModule],
    declarations: [HeroBiosComponent, HeroBioComponent],
    entryComponents: [],
    providers: [ LoggerService ],
    exports: [HeroBiosComponent, HeroBioComponent],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class HeroModule {
    constructor() {}
}
