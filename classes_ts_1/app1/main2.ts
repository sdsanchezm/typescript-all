import { ProductMemoryService } from './service/product-memory.service';

const productService1 = new ProductMemoryService();

productService1.create({
    title: 'shapes',
    price: 34,
    description: 'this shape is a fantastic product',
    categoryId: 12,
    images: []
});

// console.log(p1.getAll());

const products = productService1.getAll();
const productId = products[0].id;
productService1.update(productId, {
    title: 'this is a new shape'
});

const res1 = productService1.findOne(productId);
console.log(res1);

