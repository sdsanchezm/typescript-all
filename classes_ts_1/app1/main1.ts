import axios from 'axios';

let anyVar: any = ;


( async () => {    

    function getProducts(){
        const promise1 = axios.get('https://api.escuelajs.co/api/v1/products');
        return promise1.data;
    }
    
    console.log('starting'+'...'.repeat(20));
    const products1 = await getProducts();
    console.log( products1 );
    console.log('end----------');

    
    

})();

// api
// https://api.escuelajs.co/api/v1/products



