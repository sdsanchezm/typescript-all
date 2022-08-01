// model of the Orderusing an interface

import { BaseModel } from './../BaseModel';
import { Product } from './../products/product.model';
import { User } from "../users/user.model";

// creating interface of an order
interface Order extends BaseModel {
	products: Product[];
	user: User;
}

