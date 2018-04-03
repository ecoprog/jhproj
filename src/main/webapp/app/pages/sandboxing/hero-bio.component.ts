import { Component, Input, OnInit } from '@angular/core';
import { HeroCacheService } from './hero-cache.service';
import { LoggerService } from '../../shared/logger/logger.service';
import { Hero } from './hero';

@Component({
    selector: 'hero-bio',
    template: `
            <p>Hero bio</p>
            <h4>{{hero.name}}</h4>
            <textarea cols="25">{{hero.description}}</textarea>
            `,
    providers: [HeroCacheService],
})
export class HeroBioComponent implements OnInit {

    @Input() heroId: number;

    constructor( private heroCache: HeroCacheService) {}
    
    ngOnInit() {
        this.heroCache.fetchCachedHero(this.heroId);
    }

    get hero() {
        return this.heroCache.hero;
    }
}
