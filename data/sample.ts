import { Product } from "~/types/models/product";
import { Shop } from "~/types/models/shop";

const productsData :Product[] = [
  { id: "1", name: "商品1", price: 100 },
  { id: "2", name: "商品2", price: 200 },
  { id: "3", name: "商品3", price: 300 },
  { id: "4", name: "商品4", price: 400 },
  { id: "5", name: "商品5", price: 500 }
];

const shopData :Shop = {
  id: 1, name: "ショップA", products: productsData
};

export { productsData, shopData };
