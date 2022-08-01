// Models include all the information about the product

export type Sizes = 'S' | 'M' | 'L' | 'XL'

export type Product = {
	name: string,
	createdAt: Date,
	stock: number,
	Size?: Sizes
};
