import { Product } from './product'

export interface Shop {
    id: Number;
    name: String;
    products: Product[];
}