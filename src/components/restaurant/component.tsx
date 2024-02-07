import { FC } from 'react';
import { IRestaurant } from '../../types/interfaces.ts';
import { Menu } from '../menu/component.tsx';
import { Reviews } from '../reviews/component.tsx';
import styles from './style.module.scss';

export const Restaurant: FC<Props> = ({name, menu, reviews}) => {
	return (
		<div className={styles.container}>
			<h1>{name}</h1>
			<h3>Меню</h3>
			<Menu menu={menu} />
			<h3>Отзывы</h3>
			<Reviews reviews={reviews} />
		</div>
	);
}

type Props = Pick<IRestaurant, 'name' | 'menu' | 'reviews'>;
