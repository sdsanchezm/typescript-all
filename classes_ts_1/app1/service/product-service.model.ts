import { CreateProductDto, UpdateProductDto } from './../dtos/product.dto';
import { Product } from './../models/product.model';

export interface ProductService {
    getAll(): Promise<Product[]> | Product[];
    update(id: Product['id'], changes: UpdateProductDto): Product;
    create(dto: CreateProductDto): Product;
    findOne(id: Product['id']): Product | undefined;
}

