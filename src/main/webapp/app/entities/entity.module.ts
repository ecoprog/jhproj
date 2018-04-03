import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhprojPointsModule } from './points/points.module';
import { JhprojWeightModule } from './weight/weight.module';
import { JhprojBloodPressureModule } from './blood-pressure/blood-pressure.module';
import { JhprojPreferencesModule } from './preferences/preferences.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        JhprojPointsModule,
        JhprojWeightModule,
        JhprojBloodPressureModule,
        JhprojPreferencesModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhprojEntityModule {}
