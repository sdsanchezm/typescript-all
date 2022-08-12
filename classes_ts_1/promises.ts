import axios from 'axios';

( async () => {

    function delay(time: number) {

        const promise = new Promise<boolean>((resolve) => { // receives resolve and rejects, it is typed like this <type> (is a generic)
            setTimeout(() => {
                resolve(true);
            }, time);
        });

        return promise;
    }
    
    function getProductsAsync(){
        const promise1 = axios.get('https://api.escuelajs.co/api/v1/products');
        return promise1;
    }
    
    async function getProducts(){
        const response1 = await axios.get('https://api.escuelajs.co/api/v1/products');
        return response1.data; // here we return the data as cleanest as possible 
    }

    console.log('starting'+'...'.repeat(3));
    const response1 = await delay(1000);
    console.log(response1);
    // console.log( await getProducts() ); // it is possible doing this way
    console.log('starting'+'...'.repeat(30));
    const products1 = await getProducts();
    console.log( products1 );
    console.log('end----------');
    // console.log(products.data.length);
    
    console.log('starting'+'...'.repeat(20));
    const products2 = await getProductsAsync();
    console.log(products2);
    console.log('end----------');
    
    

})();

// api
// https://api.escuelajs.co/api/v1/products



