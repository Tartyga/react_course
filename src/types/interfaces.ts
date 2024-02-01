export interface IRestaurant {
	id: string;
	name: string;
	menu: IMenu[];
	reviews: IReview[];
}

export interface IMenu {
	id: string;
	name: string;
	price: number;
	ingredients: string[];
}

export interface IReview {
	id: string;
	user: string;
	text: string;
	rating: number;
}
