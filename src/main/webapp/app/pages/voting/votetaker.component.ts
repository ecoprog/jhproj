import {Component} from '@angular/core';

@Component ({
    selector: 'app-vote-taker',
    template: `<h3>Agree: {{ agreed }}</h3>
    <h3>Diagree: {{disagreed}}</h3>
    <app-voter *ngFor="let voter of voters" [name]="voter" (onVoted)="onVoted($event)"></app-voter>`,
})
export class VoteTakerComponent {

    agreed = 0;
    disagreed = 0;
    voters = ['Pers. 1', 'Pers. 2', ' '];

    onVoted(agreed: boolean) {
        agreed ? this.agreed++ : this.disagreed++;
    }
}
