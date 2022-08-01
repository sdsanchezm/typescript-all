// SERVICE

import { getConfigFileParsingDiagnostics } from 'typescript';
import { Product } from './product.model';

// it is important to initialize the array
export const products: Product[] = [];

export const createProduct = (data: Product) => {
	products.push(data);
}

export const calcularStock = (): number => {
	let total = 0;
	products.forEach( (item) => {
		total += item.stock;
	} );
	return total;
}


