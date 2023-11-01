import { Product } from "../shared/models/product.model";

export interface State {
    products: Product[];
    cart: Product[];
}

export interface AppState {
    shop: State;
    brandFilter: string;
}