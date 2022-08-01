// This is a product DTO
// this is created in a different file from the product model, their own file as a BP (Best Practice)

import { Product } from './../products/product.model';

// DTO Creation, to use use, import the interface from the Product Service
export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
	categoryId: string; // I am creating this id here (is nopt in the model)
}


// This is an example for a type, using the utility Type "Pick" (only pick the properties we would like to include)
type example = Pick<Product, 'color' | 'description'>

// Partial makes all properties optional
export interface UpdateProductDto extends Partial<CreateProductDto> {}

// Required makes all properties mandatory
type example2 = Required<Product>;

