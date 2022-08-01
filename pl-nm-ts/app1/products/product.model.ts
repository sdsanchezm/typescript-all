// model of the product
// We create the interface Category

import { Category } from './../categories/category.model';

export type Sizes = 'S' | 'M' | 'L' | 'XL';

export interface Product {
	id: string | number;
	createdAt: Date;
	updatedAt: Date;
	title: string;
	stock: number;
	size?: Sizes;
	category: Category; // this is a nested type, so we create an interface to make it reusable, functional and maintainable
}


