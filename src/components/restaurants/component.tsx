import { IRestaurant } from '../../types/interfaces';
import { Restaurant } from '../restaurant/component';

export const Restaurants = ({restaurants}: Props) => {
	return (
		<div>
			{restaurants?.map((restaurant: IRestaurant) => (
				<Restaurant key={restaurant.id} {...restaurant} />
			))}
		</div>
	);
}

export type Props = {
	restaurants: IRestaurant[]
}
