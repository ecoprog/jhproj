import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { SERVER_API_URL} from '../../app.constants';

import { JhiDateUtils } from 'ng-jhipster';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class CartService {

    private resourceUrl = SERVER_API_URL + 'api/cart';
    private product: number;
    
    constructor(private http: Http, private dateUtils: JhiDateUtils) {}

    addToCart(product: number) {
        this.product = product;
        console.log('Cart add : ' +  product );
    }

    getCardProduct() {
        return this.product;
    }
}
