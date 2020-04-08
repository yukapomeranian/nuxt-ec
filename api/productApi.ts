import { Product, ProductForm, ProductResponse } from "~/types/models/product";
import { $axios } from "~/plugins/axios-accessor";
export const productApi = {
  list: getProducts,
  get: getProduct,
  post: postProduct,
  delete: deleteProduct
};
async function getProducts(): Promise<Product[]> {
  const productsResponse = await $axios.$get<ProductResponse[]>("/api/product");
  return productsResponse.map(mapToProduct);
}
async function getProduct(id: string): Promise<Product> {
  const productResponse = await $axios.$get<ProductResponse>(`/product/${id}`);
  return mapToProduct(productResponse);
}
async function postProduct(productForm: ProductForm): Promise<Product> {
  const productResponse = await $axios.$post<ProductResponse>("/product/new", productForm);
  return mapToProduct(productResponse);
}
async function deleteProduct(id: string): Promise<boolean> {
  const { status } = await $axios.delete<ProductResponse>(`/product/delete/${id}`);
  return status === 204;
}
function mapToProduct(response: ProductResponse): Product {
  return {
    id: response.idResponse,
    name: response.nameResponse,
    price: response.priceResponse
  };
}
