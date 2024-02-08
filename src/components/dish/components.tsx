import { FC, useState } from 'react';
import { IMenu } from '../../types/interfaces.ts';
import { Counter } from '../counter/component.tsx';
import styles from './style.module.scss';
export const Dish: FC<Props> = ({ name, price }) => {

	const [amount, setAmount] = useState<number>(0);

	return (
		<div className={styles.root}>
			<div>{name}:</div>
			<div className={styles.price}>
				<div>${price}</div>
				<Counter value={amount} onChange={setAmount} />
			</div>
		</div>
	);
}

type Props = Pick<IMenu, 'name' | 'price'>;
