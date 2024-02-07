import { FC } from 'react';
import { IReview } from '../../types/interfaces.ts';

export const Review: FC<Props> = ({user, text}) => {
	return (
		<div>
			<div><strong>{user}:</strong></div>
			<div>{text}</div>
		</div>
	);
}

type Props = Pick<IReview, 'user' | 'text'>;
