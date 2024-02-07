import { useState } from 'react';
import { restaurants } from '../../constants/mock.ts';
import { IRestaurant } from '../../types/interfaces.ts';
import { RestaurantTabs } from '../restaurant-tabs/component.tsx';
import { Restaurant } from '../restaurant/component.tsx';

export const RestaurantPage = () => {
	const [activeRestaurant, setActiveRestaurant] = useState<IRestaurant>();

	return (
		<>
			<RestaurantTabs
				restaurants={restaurants}
				activeId={activeRestaurant?.id}
				onSelect={(restaurant) => setActiveRestaurant(restaurant)}
			/>
			{activeRestaurant ? (
				<Restaurant {...activeRestaurant} />
			) : (
				"No active restaurants"
			)}
		</>
	)
}
