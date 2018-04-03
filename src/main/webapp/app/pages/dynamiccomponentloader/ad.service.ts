import { Injectable } from '@angular/core';

import { HeroJobAdComponent } from './hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile.component';

import { AdItem } from './ad.item';

@Injectable()
export class AdService {

    constructor() {}

    getAds() {
      return [
        new AdItem(HeroProfileComponent, {name: 'Bombasto', bio: 'Brave as they come.'}),
        new AdItem(HeroProfileComponent, {name: 'Dr. IQ', bio: 'Smart as they come.'}),
        new AdItem(HeroJobAdComponent, {headline: 'Hiring for different positions', body: 'Submit your resume today.'}),
        new AdItem(HeroJobAdComponent, {headline: 'Hiring for IT jobs.', body: 'Apply today.'}),
      ] 
    }
}
