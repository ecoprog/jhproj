import {Component} from '@angular/core';
import {ChildComponent} from './child.component';

@Component({
    selector: 'app-parent',
    template: `<h3> Countdown to lift up - Locale variable </h3>
        <button (click)="timer.start()">Start</button>
        <button (click)="timer.stop()">Stop</button>
        <div>Seconds: {{timer.seconds}}</div>
        <app-child #timer></app-child>`,
})
export class ParentComponent {}
