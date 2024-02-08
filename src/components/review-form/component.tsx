import { FC, useReducer } from 'react';
import { IReview } from '../../types/interfaces.ts';
import { Button } from '../button/component.tsx';
import styles from './style.module.scss';

export const ReviewForm: FC<Props> = ({onSubmit}) => {
	const INITIAL_VALUE = {
		name: '',
		text: '',
		rating: 5,
	}

	const reducer: ReviewReducer = (state, { type, payload }) => {
		switch (type) {
			case 'setName':
				return {
					...INITIAL_VALUE,
					name: payload,
				}

			case 'setText':
				return {
					...state,
					text: payload,
				}

			case 'setRating':
				return {
					...state,
					rating: payload,
				}

			case 'clearForm':
				return {
					...INITIAL_VALUE,
				}

			default:
				return state;
		}
	}

	const [form, dispatch] = useReducer(reducer, INITIAL_VALUE);

	return (
		<form className={styles.root}>
			<div className={styles.row}>
				<label htmlFor="name">Имя</label>
				<input
					id="name"
					type="text"
					name="name"
					value={form.name}
					onChange={(event) => dispatch({type: 'setName', payload: event.target.value})}
				/>
			</div>
			<div className={styles.row}>
				<label htmlFor="text">Текст</label>
				<input
					id="text"
					type="text"
					name="text"
					value={form.text}
					onChange={(event) => dispatch({type: 'setText', payload: event.target.value})}
				/>
			</div>
			<div className={styles.row}>
				<label htmlFor="rating">Рейтинг</label>
				<input
					id="rating"
					type="number"
					name="rating"
					value={form.rating}
					onChange={(event) => dispatch({type: 'setRating', payload: event.target.value})}
				/>
			</div>
			<Button
				disabled={!form.name || !form.text || !form.rating}
				onClick={() => {
					onSubmit(makeData(form));
					dispatch({type: 'clearForm'});
				}}
			>
				Send
			</Button>
		</form>
	)
}

function makeData({name, text, rating}: Review): IReview {
	return {
		id: crypto.randomUUID(),
		user: name,
		text,
		rating,
	}
}

type Props = {
	onSubmit: (data: IReview) => void;
}

type Review = {
	name: string;
	text: string;
	rating: number;
}

type ReviewReducer = (
	state: Review,
	args: {
		type: 'setName' | 'setText' | 'setRating' | 'clearForm';
		payload?: any
	}
) => Review;
