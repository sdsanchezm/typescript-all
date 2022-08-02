
import { faker } from '@faker-js/faker'; // npm install @faker-js/faker --save-dev
import { update } from 'lodash';
import { Product } from './products/product.model';
import { addProduct, products, updateProduct, findProducts } from './products/product.service';

for (let index = 0; index < 50; index++){
	addProduct({
		// id, createdAt and updatedAt, are no longer here because that info comes from the service (automatically)
		title: faker.commerce.productName(),
		image: faker.image.imageUrl(),
		description: faker.commerce.productDescription(),
		color: faker.color.human(),
		price: parseInt(faker.commerce.price(), 10),
		stock: faker.datatype.number({min: 5, max: 101}),
		categoryId: faker.datatype.uuid(), // this was added because of the product DTO
		isNew: faker.datatype.boolean(),
		tags: faker.helpers.arrayElement(),
		size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']) // options here must be part of the enum declared in the model
	});
}

// console.log(products);

const product = products[0];
updateProduct(product.id, {
	title: 'New title here',
	stock: 90,
	// id: '123' // this field is not editable, based on the dto (productDto in this case)
});

const k1 = findProducts({
	stock: 10,
	color: 'red',
	tags: ['as', 'as']
});

console.log(k1);




/*
model:
type for size
interface for product

service:
array for products
add products

npm install @faker-js/faker --save-dev

*/
