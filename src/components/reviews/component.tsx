import { FC } from 'react';
import { IReview } from '../../types/interfaces';
import { Review } from '../review/component';

export const Reviews: FC<Props> = ({reviews}) => {
	return (
		<div>
			{reviews?.map((review: IReview) => (
				<Review key={review.id} {...review} />
			))}
		</div>
	);
}

type Props = {
	reviews: IReview[] | undefined;
}
