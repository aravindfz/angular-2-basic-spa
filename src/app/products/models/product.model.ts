export interface Product {
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    price: number;
    description: string;
    quantity: number;
    showErrorMessage?: string;
}