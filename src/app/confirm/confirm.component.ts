import { Component, OnInit } from '@angular/core';
import { Product } from "app/products/models/product.model";
import { ProductService } from "app/products/services/product.service";
import { Store } from "@ngrx/store";
import { AppStore } from "app/store/app.store";
import { ACTIONS } from "app/store/reducer";

@Component({
    templateUrl: 'confirm.component.html',
})
export class ConfirmComponent implements OnInit {
    pageTitle: string = 'Product List';
    errorMessage: string;
    products: Product[];
    constructor() { }

    ngOnInit(): void {

    }

}