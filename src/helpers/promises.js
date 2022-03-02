import { products } from "../data/products";


export const productsAPI = new Promise((resolve) => {
  setTimeout(() => {
    resolve(products);
  }, 2000);
});
