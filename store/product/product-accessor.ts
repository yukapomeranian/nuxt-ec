import { Store } from "vuex";
import { getModule } from "vuex-module-decorators";
import ProductsStore from "~/store/product/product";

// eslint-disable-next-line import/no-mutable-exports
let productsStore: ProductsStore;

function initialiseStores(store: Store<any>): void {
  productsStore = getModule(ProductsStore, store);
}

export { initialiseStores, productsStore };
