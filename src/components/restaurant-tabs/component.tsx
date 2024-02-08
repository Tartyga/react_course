import { FC } from 'react';
import classNames from 'classnames';
import { IRestaurant } from '../../types/interfaces.ts';
import { Button } from '../button/component.tsx';
import styles from './style.module.scss';

export const RestaurantTabs: FC<Props> = ({ restaurants, activeId, onSelect }) => {
	return (
		<div className={styles.root}>
			{restaurants.map((restaurant) => (
				<Button
					key={restaurant.id}
					className={classNames({
						active: activeId === restaurant.id
					})}
					onClick={() => onSelect(restaurant)}
				>
					{restaurant.name}
				</Button>
			))}
		</div>
	);
}

type Props = {
	restaurants: IRestaurant[];
	activeId: string | undefined;
	onSelect: (data: IRestaurant) => void;
}
