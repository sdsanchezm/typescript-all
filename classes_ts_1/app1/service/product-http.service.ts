import axios from 'axios';

import { UpdateProductDto, CreateProductDto } from '../dtos/product.dto';
import { Product } from '../models/product.model';
import { ProductService } from './product-service.model';

export class ProductHttpService implements ProductService {

    private url = 'https://api.escuelajs.co/api/v1/products';

    async getAll() {
        const { data } = await axios.get<Product[]>(this.url);
        return data;
    }
    update(id: number, changes: UpdateProductDto): Product {
        throw new Error('Method not implemented.');
    }
    create(dto: CreateProductDto): Product {
        throw new Error('Method not implemented.');
    }
    findOne(id: number): Product | undefined {
        throw new Error('Method not implemented.');
    }

}