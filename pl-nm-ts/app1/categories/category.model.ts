
import { BaseModel } from './../BaseModel';

// Interface of the Category, extending BaseModel
// extends is usable with interfaces, not with types
export interface Category extends BaseModel {
	name: string;
}
