import {Component, OnDestroy, OnInit} from '@angular/core';

@Component ({
    selector: 'app-child',
    template: '<p>{{message}}</p>',
})
export class ChildComponent implements OnInit, OnDestroy {

    intervalId = 0;
    message = '';
    seconds = 11;

    clearTimer() {
        clearInterval(this.intervalId);
    }

    ngOnInit() { this.start()};
    ngOnDestroy() { this.stop()};

    start() { this.count();
        console.log('start');
    };
    stop() {
        clearInterval(this.intervalId);
        this.message = `Holding at T-${this.seconds} seconds`;
    };

    private count() {
        this.clearTimer();
        this.intervalId = window.setInterval(() => {
            this.seconds -= 1;
            if (this.seconds === 0) {
                this.message = 'Rocket starts';
            } else {
                if (this.seconds < 0) {
                    this.seconds = 10;
                    this.message = `T-${this.seconds} seconds and counting.`;
                }
            }
        }, 1000);
    }

}
