// services, methods for products

import { Product } from './product.model';

export const products: Product[] = [];

export const addProduct = (newProduct: Product) => {
	products.push(newProduct);
};


