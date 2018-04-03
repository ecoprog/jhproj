import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component ({
    selector: 'app-voter',
    template: `<h4>{{name}}</h4>
    <button (click)="vote(true)" [disabled]="voted">Agree</button>
    <button (click)="vote(false)" [disabled]="voted">Disagree</button>`,
})
export class VoterComponent {

    private _name = '';
    voted = false;

    @Output() onVoted = new EventEmitter<boolean>();
    @Input() set name(name: string) {
        this._name = (name || '<No name defined>');
    }

    get name(): string {
        return this._name;
    }

    vote(agreed: boolean) {
        this.onVoted.emit(agreed);
        this.voted = true;
    }
}
