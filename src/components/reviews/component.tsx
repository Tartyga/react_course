import { IReview } from '../../types/interfaces';
import { Review } from '../review/component';

export const Reviews = ({reviews}: Props) => {
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
