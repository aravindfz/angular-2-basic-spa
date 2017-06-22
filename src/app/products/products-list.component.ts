import { Component, OnInit } from '@angular/core';
import { Product } from "app/products/models/product.model";
import { ProductService } from "app/products/services/product.service";
import { Store } from "@ngrx/store";
import { AppStore } from "app/store/app.store";
import { ACTIONS } from "app/store/reducer";
import { Router } from "@angular/router";

@Component({
    templateUrl: 'products-list.component.html',
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    errorMessage: string;
    products: Product[];
    constructor(private productService: ProductService,
        private router: Router,
        private appStore: Store<AppStore>) { }

    ngOnInit(): void {
        this.productService.getProducts()
            .subscribe(products => {
                this.dispatchPrductsToStore(products);
            },
            error => this.errorMessage = <any>error);
        this.appStore.select('productSlice')
            .subscribe((data: Product[]) => {
                if (data) {
                    this.products = <Product[]>data;
                    console.log(this.products);
                }
            });
    }
    dispatchPrductsToStore(products: Product[]) {
        this.appStore.dispatch({
            type: ACTIONS.LOAD_PRODUCTS,
            payload: {
                productSlice: products
            }
        });
    }
    addToCart(quantity: number) {
        this.appStore.dispatch({
            type: ACTIONS.LOAD_CART,
            payload: {
                cartSlice: +quantity
            }
        })
    }
    confirm() {
        this.router.navigateByUrl('/confirm');
    }
}