import { ActionReducer, Action } from '@ngrx/store';
import { ProductSlice, CartSlice } from "app/store/app.store";

export class ACTIONS {
    static LOAD_PRODUCTS: string = 'LOAD_PRODUCTS';
    static LOAD_CART: string = 'LOAD_CART';
}

let initialState = {};

export function productSlice(state: ProductSlice, action: Action) {
    if (state === void 0) { return initialState; };
    switch (action.type) {
        case ACTIONS.LOAD_PRODUCTS:
            return action.payload.productSlice;
        default:
            return state;
    }
}

export function cartSlice(state: CartSlice, action: Action) {
    if (state === void 0) { return initialState; };
    switch (action.type) {
        case ACTIONS.LOAD_CART:
            return action.payload.cartSlice;
        default:
            return state;
    }
}

