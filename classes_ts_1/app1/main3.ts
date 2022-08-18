import { ProductHttpService } from './service/product-http.service';


(async () => {

    const myProductHttp = new ProductHttpService();

    const test = await myProductHttp.getAll();
    console.log(test.length);
    console.log(test.map( item => item.id ));

    const test2 = await myProductHttp.findOne(1);
    console.log(test2);
    
    const productId = test[0].id;
    await myProductHttp.update(productId, {
        title: 'Large Dog bed',
        price: 2121
    });

    const test3 = await myProductHttp.findOne(1);
    console.log(test3);

})();