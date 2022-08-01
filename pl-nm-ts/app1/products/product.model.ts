// model of the product
// We create the interface Category

import { Category } from './../categories/category.model';
import { BaseModel } from './../BaseModel';

export type Sizes = 'S' | 'M' | 'L' | 'XL';

export interface Product extends BaseModel {
	title: string;
	stock: number;
	size?: Sizes;
	category: Category; // this is a nested type, so we create an interface to make it reusable, functional and maintainable
}


