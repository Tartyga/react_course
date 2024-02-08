import { FC } from 'react';
import { IRestaurant, IReview } from '../../types/interfaces.ts';
import { Menu } from '../menu/component.tsx';
import { ReviewForm } from '../review-form/component.tsx';
import { Reviews } from '../reviews/component.tsx';
import styles from './style.module.scss';

export const Restaurant: FC<Props> = ({name, menu, reviews}) => {
	const onReviewAdd = (review: IReview): void => {
		console.log(review);
	}

	return (
		<div className={styles.root}>
			<h1>{name}</h1>
			<h3>Меню</h3>
			<Menu menu={menu} />
			<h3>Отзывы</h3>
			<Reviews reviews={reviews} />
			<ReviewForm onSubmit={onReviewAdd} />
		</div>
	);
}

type Props = Pick<IRestaurant, 'name' | 'menu' | 'reviews'>;
