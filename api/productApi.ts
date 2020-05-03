import { Product, ProductForm, ProductResponse } from "~/types/models/product";
import { $axios } from "~/plugins/axios-accessor";
export const productApi = {
  list: getProducts,
  get: getProduct,
  post: postProduct,
  delete: deleteProduct
};
async function getProducts(): Promise<Product[]> {
  console.log("getProducts");
  // https://script.google.com/macros/s/AKfycbx-4rPWGU4Ce8vbNXTQFpALNhzN3LVHq5B56f-0cmPv41Bhp4Y/exec?&sheetname=products
  const productsResponse = await $axios.$get<ProductResponse[]>(
    "https://script.google.com/macros/s/AKfycbx-4rPWGU4Ce8vbNXTQFpALNhzN3LVHq5B56f-0cmPv41Bhp4Y/exec?&sheetname=products");
  console.log(`productsResponse=${JSON.stringify(productsResponse)}`);
  return productsResponse.map(mapToProduct);
}
async function getProduct(id: string): Promise<Product> {
  const productResponse = await $axios.$get<ProductResponse>(`/api/product/${id}`);
  return mapToProduct(productResponse);
}
async function postProduct(productForm: ProductForm): Promise<Product> {
  const productResponse = await $axios.$post<ProductResponse>("/api/product/new", productForm);
  return mapToProduct(productResponse);
}
async function deleteProduct(id: string): Promise<boolean> {
  const { status } = await $axios.delete<ProductResponse>(`/api/product/delete/${id}`);
  return status === 204;
}
function mapToProduct(response: ProductResponse): Product {
  return {
    id: response.id,
    name: response.name,
    price: response.price
  };
}
