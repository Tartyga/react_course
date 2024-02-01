import { Restaurants } from './components/restaurants/component';
import { Layout } from './components/layout/component';
import { restaurants } from './constants/mock.ts';

export const App = () => {
	return (
		<Layout>
			<div className="content">
				<Restaurants restaurants={restaurants} />
			</div>
		</Layout>
	)
}
