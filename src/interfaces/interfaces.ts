export interface Restaurant {
	id: string;
	name: string;
	menu: Menu[];
	reviews: Review[];
}

interface Menu {
	id: string;
	name: string;
	price: number;
	ingredients: string[];
}

interface Review {
	id: string;
	user: string;
	text: string;
	rating: number;
}
