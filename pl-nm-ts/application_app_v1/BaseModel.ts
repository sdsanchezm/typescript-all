// This is the BaseModel definition, all models should include a base,
// so they get id, createdAt and updatedAt, by inherit this interface

// BaseModel interface definition, this interface will be extended by most models in the application
// This interface will add id, createdAt and updatedAt
export interface BaseModel {
	readonly id: string | number; // readonly makes this one a read only property (cant be changed in the service)
	readonly createdAt: Date;
	updatedAt: Date;
}


