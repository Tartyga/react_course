import { IReview } from '../../types/interfaces.ts';

export const Review = ({user, text}: Partial<IReview>) => {
	return (
		<div>
			<div><strong>{user}:</strong></div>
			<div>{text}</div>
		</div>
	);
}
