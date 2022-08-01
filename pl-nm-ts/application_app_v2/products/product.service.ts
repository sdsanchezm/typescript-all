// services, methods for products

import { Product } from './product.model';
import { CreateProductDto, UpdateProductDto } from './product.dto';
import { faker } from '@faker-js/faker';

export const products: Product[] = [];

export const addProduct = (data: CreateProductDto): Product => {
	const newProduct = {
		...data,
		id: faker.datatype.uuid(),
		createdAt: faker.date.recent(),
		updatedAt: faker.date.recent(),
		category: {
			id: data.categoryId,
			name: faker.commerce.department(),
			createdAt: faker.date.recent(),
			updatedAt: faker.date.recent()
		}
	}
	products.push(newProduct); // added new Product to the Array (working on memory this time)
	return newProduct; // returning the product
};

export const updateProduct = (id: string, changes: UpdateProductDto): Product => {
	const index = products.findIndex(item => item.id === id);
	const prevData = products[index];
	products[index] = {
		...prevData,
		...changes
	}
	return products[index];
};

