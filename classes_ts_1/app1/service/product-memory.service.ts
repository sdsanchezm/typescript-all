import { Product } from '../models/product.model';
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';
import { faker } from '@faker-js/faker';
import { ProductService } from './product-service.model';


export class ProductMemoryService implements ProductService {
    private products: Product[] = [];
    
    create (data: CreateProductDto): Product {
        const newProduct = {
            ...data,
            id: faker.datatype.number(),
            category: {
                id: data.categoryId,
                name: faker.commerce.department(),
                image: faker.image.imageUrl(),
            }
        }
        return this.add(newProduct);
    };

    add (product: Product) {
        this.products.push(product);
        return product;
    };
       
    update (id: Product['id'], changes: UpdateProductDto): Product {
        const index = this.products.findIndex(item => item.id === id);
        const prevData = this.products[index];
        this.products[index] = {
            ...prevData,
            ...changes
        }
        return this.products[index];
    };

    findOne(id: Product['id']){
        return this.products.find( item => item.id === id);
    }

    getAll(){
        return this.products;
    }
}




// in this case id: Product['id'] is accessing the type of id, so if BaseModel, specifically id
// is changed, then this syntaxys will guarantee that the Type also change



// Arrays can change with updating, methods, etc
// the ReadonlyArray utility type allows to prevent to modify arrays

