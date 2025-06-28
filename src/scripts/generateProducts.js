import { createFakeProduct } from '../utils/createFakeProducts.js';
import { readProducts } from '../utils/readProducts.js';
import { writeProducts } from '../utils/writeProducts.js';

export async function generateProducts(count) {
  const products = await readProducts();

  for (let i = 0; i < count; i++) {
    products.push(createFakeProduct());
  }

  await writeProducts(products);
}

generateProducts(5);
