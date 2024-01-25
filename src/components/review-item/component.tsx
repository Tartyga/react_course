import { Review } from '../../interfaces/interfaces.ts';

export const ReviewItem = ({id, user, text}: Partial<Review>) => {
	return (
		<li key={id}>{user}: {text}</li>
	);
}
