// model of the Orderusing an interface

import { Product } from "../../products/product.model";
import { User } from "../users/user.model";

// creating interface of an order
interface Order {
	id: string | number;
	createdAt: Date;
	products: Product[];
	user: User;
}

