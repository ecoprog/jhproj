import { Injectable } from '@angular/core';

@Injectable()
export class RoutingService {

    private defaultRoute: string;
    private currentRoute: string;
    private previousRoute: string;

    constructor() {}

    public setDefaultRoute(route: string) {
        this.defaultRoute = route;
    }
    public getDefaultRoute(): string {
        return this.defaultRoute;
    }

    public setCurrentRoute(route: string) {
        this.currentRoute = route;
    }
    public getCurrentRoute(): string {
        return this.currentRoute;
    }

    public setPreviousRoute(route: string) {
        this.previousRoute = route;
    }

    public getPreviousRoute(): string {
        return this.previousRoute;
    }
}
