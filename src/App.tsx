import { Restaurant } from './interfaces/interfaces.ts';
import { Layout } from './components/layout'
import { RestaurantItem } from './components/restaurant-item'
import { restaurants } from './constants/mock'

export const App = () => {
	return (
		<Layout>
			<div className="page">
				{restaurants.map((item: Restaurant) => (
					<RestaurantItem key={item.id} {...item} />
				))}
			</div>
		</Layout>
	)
}
