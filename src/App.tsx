import { RestaurantPage } from './components/restaurant-page/component.tsx';
import { Layout } from './components/layout/component';

export const App = () => {
	return (
		<Layout>
			<div className="content">
				<RestaurantPage />
			</div>
		</Layout>
	)
}
