import fs from 'fs/promises';
import { PATH_DB } from '../constans/products.js';

export async function readProducts() {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading file', error.message);
    return [];
  }
}
