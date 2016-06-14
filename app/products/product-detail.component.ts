import { Component } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';
import { IProduct } from './product';
import { StarComponent } from '../shared/star.component';

@Component({
    templateUrl: 'app/products/product-detail.component.html',
    directives: [StarComponent]
})

export class ProductDetailComponent {
    pageTitle: string = 'Product Detail';
    productName: string;
    productCode: string;
    releaseDate: string;
    price: number;
    starRating:number;
    imageUrl:string;
    description: string;

    constructor(private _routeParams: RouteParams, private _router: Router){
        let id= +this._routeParams.get('id');
        this.productName = this._routeParams.get('name');
        this.productCode = this._routeParams.get('code');
        this.releaseDate = this._routeParams.get('date');
        this.price= +this._routeParams.get('price');
        this.starRating = +this._routeParams.get('starRating');
        this.imageUrl= this._routeParams.get('imageUrl');
        this.description= this._routeParams.get('description');
        this.pageTitle += `: ${this.productName} `;
    }

    onBack(): void{
        this._router.navigate(['Products']);
    }
}