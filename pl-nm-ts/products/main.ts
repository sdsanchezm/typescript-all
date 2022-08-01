import { createProduct, calcularStock, products } from './product.service';
import { subDays, format } from 'date-fns'; // npm install date-fns --save

// npm i lodash // this is by defaul from javascript (not supported by TS)
// npm i --save-dev @types/lodash // this is the suggested way to add the support to TS
import _ from 'lodash';

createProduct({
	name: 'Product1',
	createdAt: new Date(2021, 3, 3),
	stock: 5
});

createProduct({
	name: 'Product2',
	createdAt: new Date(2022, 2, 3),
	stock: 13
});

console.log(products);
const total = calcularStock();
console.log(`total Stock: ${total}`);

const date = new Date(1998, 11, 21);
const resp = subDays(date, 30);
const stri = format(resp, 'yyyy/MM/dd')

console.log(stri);


// use lodash:
const data = [
	{
		username: 'tiche',
		role: 'user'
	},
	{
		username: 'jamecho',
		role: 'admin'
	},
	{
		username: 'amparo',
		role: 'marrana'
	},
	{
		username: 'obama',
		role: 'marrana'
	}
];

const rt1 = _.groupBy(data, (item) => item.role );
console.log(rt1);

