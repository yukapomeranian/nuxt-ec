import { Store } from "vuex";
import { initialiseStores } from "~/store/product/product-accessor";

const initializer = (store: Store<any>): void => initialiseStores(store);

export const plugins = [initializer];
export * from "~/store/product/product-accessor";
