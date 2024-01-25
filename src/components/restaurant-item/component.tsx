import { Menu, Restaurant, Review } from '../../interfaces/interfaces.ts';
import { MenuItem } from '../menu-item';
import { ReviewItem } from '../review-item';
import styles from './style.module.scss';

export const RestaurantItem = ({name, menu, reviews}: Partial<Restaurant>) => {
	return (
		<div className={styles.container}>
			<h1>{name}</h1>
			<h3>Меню</h3>
			<ul>
				{menu?.map((item: Menu) => (
					<MenuItem {...item}/>
				))}
			</ul>
			<h3>Отзывы</h3>
			<ul>
				{reviews?.map((item: Review) => (
					<ReviewItem {...item} />
				))}
			</ul>
		</div>
	);
}
