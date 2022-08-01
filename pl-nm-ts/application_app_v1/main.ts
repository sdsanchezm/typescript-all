import { addProduct } from './products/product.service';


addProduct({
	id: 1,
	createdAt: new Date(),
	updatedAt: new Date(),
	title: 'producto1',
	image: '/images/product1',
	description: "this is nice and wonderful product",
	color: "blue",
	price: 300,
	stock: 2,
	category: {
		id: '32',
		createdAt: new Date(),
		updatedAt: new Date(),
		name: 'cat4'
	},
	isNew: false,
	tags: ['home', 'tech']
});
















/*
model:
type for size
interface for product

service:
array for products
add products



*/
