import { addProduct } from './products/product.service';


addProduct({
	id: 1,
	createdAt: new Date(),
	updatedAt: new Date(),
	title: 'producto1',
	stock: 2,
	category: {
		id: '32',
		createdAt: new Date(),
		updatedAt: new Date(),
		name: 'cat4'
	}
});
















/*
model:
type for size
interface for product

service:
array for products
add products



*/
