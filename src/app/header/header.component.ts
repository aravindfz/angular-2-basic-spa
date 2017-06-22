import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { AppStore } from "app/store/app.store";

@Component({
    selector: 'header',
    templateUrl: 'header.component.html'
})
export class HeaderComponent implements OnInit {
    cartCount: number = 0;
    constructor(private appStore: Store<AppStore>) { }
    ngOnInit() {
        this.appStore.select('cartSlice')
            .subscribe((data: number) => {
                if (data > 0) {
                    this.cartCount = this.cartCount + data;
                }
            });
    }
}