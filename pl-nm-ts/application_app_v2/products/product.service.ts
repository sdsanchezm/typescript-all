// services, methods for products

import { Product } from './product.model';
import { CreateProductDto, UpdateProductDto, FindProductDto } from './product.dto';
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

// in this case id: Product['id'] is accessing the type of id, so if BaseModel, specifically id
// is changed, then this syntaxys will guarantee that the Type also change
export const updateProduct = (id: Product['id'], changes: UpdateProductDto): Product => {
	const index = products.findIndex(item => item.id === id);
	const prevData = products[index];
	products[index] = {
		...prevData,
		...changes
	}
	return products[index];
};

export const findProducts = (dto: FindProductDto): Product[] => {
	// here cannot modify or change, because the type is FindProductDto
	// FindProductDto, is Readonly and Partial
	// FindProductDto is implemented in product.dto.ts

	// the below changes is to show that the ReadonlyArray and the readonly in FindProductDto is preventing from making changes here (assignments or array methods)

	// dto.tags = []; // ts does not allow a change like this
	// dto.tags?.pop(); // this allow me to do it (the ? is an optional changing) - this should not happend because it mutates the array
	// dto.tags?.push(); // this allow me to do it (the ? is an optional changing) - this should not happend because it mutates the array

	return products;
}


// Arrays can change with updating, methods, etc
// the ReadonlyArray utility type allows to prevent to modify arrays

