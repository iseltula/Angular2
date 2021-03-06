System.register(['angular2/core', 'angular2/router', '../shared/star.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, star_component_1;
    var ProductDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (star_component_1_1) {
                star_component_1 = star_component_1_1;
            }],
        execute: function() {
            ProductDetailComponent = (function () {
                function ProductDetailComponent(_routeParams, _router) {
                    this._routeParams = _routeParams;
                    this._router = _router;
                    this.pageTitle = 'Product Detail';
                    var id = +this._routeParams.get('id');
                    this.productName = this._routeParams.get('name');
                    this.productCode = this._routeParams.get('code');
                    this.releaseDate = this._routeParams.get('date');
                    this.price = +this._routeParams.get('price');
                    this.starRating = +this._routeParams.get('starRating');
                    this.imageUrl = this._routeParams.get('imageUrl');
                    this.description = this._routeParams.get('description');
                    this.pageTitle += ": " + this.productName + " ";
                }
                ProductDetailComponent.prototype.onBack = function () {
                    this._router.navigate(['Products']);
                };
                ProductDetailComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/products/product-detail.component.html',
                        directives: [star_component_1.StarComponent]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, router_1.Router])
                ], ProductDetailComponent);
                return ProductDetailComponent;
            }());
            exports_1("ProductDetailComponent", ProductDetailComponent);
        }
    }
});
//# sourceMappingURL=product-detail.component.js.map