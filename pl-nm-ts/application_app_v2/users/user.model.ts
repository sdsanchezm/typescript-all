// Definition of the user interface

import { BaseModel } from './../BaseModel';

// Enum to define roles that are goign to be used by users
export enum ROLES {
	ADMIN = "admin",
	SELLER = "seller",
	CUSTOMER = "customer",
}

// Interface to define the User
export interface User extends BaseModel {
	username: string;
	role: ROLES;
}



