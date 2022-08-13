import { Product } from './../models/product.model';
import { Category } from './../models/category.model';

// DTO Creation, to use use, import the interface from the Product Service
export interface CreateProductDto extends Omit<Product, 'id' | 'category'> {
	categoryId: Category['id']; // I am creating this id here (is not in the model)
}


// Partial makes all properties optional
export interface UpdateProductDto extends Partial<CreateProductDto> {}



