// model of the product
// We create the interface Category

import { Category } from './../categories/category.model';
import { BaseModel } from './../BaseModel';

export type Sizes = 'S' | 'M' | 'L' | 'XL';

export interface Product extends BaseModel {
	title: string;
	image: string;
	description: string;
	stock: number;
	size?: Sizes;
	color: string;
	price: number;
	category: Category; // this is a nested type, so we create an interface to make it reusable, functional and maintainable
	isNew: boolean;
	tags: string[];
}


// Utility Types: omit, pick,
// type CreateProductDto = Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'>;

// interface CreateProductDto extends
// export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
// 	categoryId: string;
// }
