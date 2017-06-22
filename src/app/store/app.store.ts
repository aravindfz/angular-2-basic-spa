import { Product } from "app/products/models/product.model";

export interface ProductSlice {
    products: Product[];
}
export interface CartSlice {
    cartCount: number;
}
export interface AppStore {
    productSlice: ProductSlice;
    cartSlice: CartSlice;
}