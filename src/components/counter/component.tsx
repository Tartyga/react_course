import { FC } from 'react';
import { Button } from '../button/component.tsx';
import styles from './style.module.scss';

export const Counter: FC<Props> = ({ value, onChange, min = 0, max = 5 }) => {
	return (
		<div className={styles.root}>
			<Button disabled={value === min} onClick={() => onChange(value - 1)}>-</Button>
			{value}
			<Button disabled={value === max} onClick={() => onChange(value + 1)}>+</Button>
		</div>
	);
}

type Props = {
	value: number,
	onChange: (value: number) => void,
	min?: number,
	max?: number,
}
