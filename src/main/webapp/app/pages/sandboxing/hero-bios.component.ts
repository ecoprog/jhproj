import { Component } from '@angular/core';
import { HeroService } from './hero.service';
import { LoggerService } from '../../shared/logger/logger.service';
import { OnInit, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector: 'app-hero-bios',
    template: `<p>Hero bios</p>
    <hero-bio [heroId]="1"></hero-bio>
    <hero-bio [heroId]="2"></hero-bio>
    <hero-bio [heroId]="3"></hero-bio>`,
    providers: [HeroService],
})
export class HeroBiosComponent {

    constructor(private logger: LoggerService) {
        this.logger.logInfo('Creating HeroBiosComponent');
    }
}
