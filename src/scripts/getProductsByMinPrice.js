import { readProducts } from '../utils/readProducts.js';

export async function getProductsByMinPrice(minPrice) {
  const products = await readProducts();
  return products.filter((product) => Number(product.price) >= minPrice);
}
console.log(await getProductsByMinPrice(500));
