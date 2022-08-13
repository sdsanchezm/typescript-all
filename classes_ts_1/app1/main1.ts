import axios from 'axios';
import {Product } from './models/product.model';

let anyVar: any = 12;
let boolVar: boolean = anyVar; // this should not be allowed, assinging any to boolean


( async () => {    

    async function getProducts(): Promise<Product[]>{
        
        // Option 1: 
        // const promise1 = await axios.get('https://api.escuelajs.co/api/v1/products');
        // return promise1.data;

        // Option 2:
        // const { data } = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products');
        // return data;

        // Option 3:
        const rta = await axios.get('https://api.escuelajs.co/api/v1/products');
        const data = rta.data as Product[]; // this is casting, is recommended to use the library instead or forcing the change in type using casting
        return data;

    }
    
    const products = await getProducts();
    console.log(products.map(item => `${item.id}`));
    

})();

// api
// https://api.escuelajs.co/api/v1/products

// Version with no types:

// ( async () => {    

//     function getProducts(){
//         const promise1 = axios.get('https://api.escuelajs.co/api/v1/products');
//         return promise1;
//     }
    
//     console.log('starting'+'...'.repeat(20));
//     const products1 = await getProducts();
//     console.log( products1 );
//     console.log('end----------');

// })();



