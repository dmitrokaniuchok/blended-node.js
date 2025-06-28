import fs from 'fs/promises';
import { PATH_DB } from '../constans/products.js';

export async function writeProducts(products) {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(products, null, 2));
  } catch (error) {
    console.error('Error writing products', error.message);
  }
}
