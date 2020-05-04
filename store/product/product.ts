import {
  Module,
  VuexModule,
  Mutation,
  Action
} from "vuex-module-decorators";
import { Product, ProductForm } from "../../types/models/product";
import { productApi } from "~/api/productApi";

  @Module({
    name: "product/product",
    stateFactory: true,
    namespaced: true
  })
export default class ProductsStore extends VuexModule {
      private products: Product[] = [];

      @Mutation
      private addProduct(product: Product): void {
        this.products.push(product);
      }

      @Mutation
      private setProducts(products: Product[]): void {
        this.products = products;
      }

      @Mutation
      private removeProduct(id: string | null): void {
        this.products = this.products.filter(product => product.id !== id);
      }

      @Action({ commit: "setProducts", rawError: true })
      public async fetchMany(): Promise<Product[]> {
        if (this.allProducts.length > 0) {
          return await Promise.resolve([]);
        }
        return await productApi.list();
      }

      @Action({ commit: "addProduct" })
      public fetch(id: string): Promise<Product> {
        return productApi.get(id);
      }

      @Action({ commit: "removeProduct" })
      public async remove(id: string): Promise<string | null> {
        const isDeleted = await productApi.delete(id);
        return isDeleted ? id : null;
      }

      @Action({ commit: "addProduct" })
      public createProduct(productForm: ProductForm): Promise<Product> {
        return productApi.post(productForm);
      }

      public get allProducts(): Product[] {
        console.log("get allProducts()");
        return this.products;
      }

      public get productCount(): number {
        return this.products.length;
      }

      public get productById(): (id: string) => Product | undefined {
        return (id: string) => this.products.find(product => product.id === id);
      }
}
