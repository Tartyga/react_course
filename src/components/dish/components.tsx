import { IMenu } from '../../types/interfaces.ts';
import styles from './style.module.scss';
export const Dish = ({ name, price }: Partial<IMenu>) => {
	return (
		<div className={styles.item}>
			<div>{name}:</div>
			<div>${price}</div>
		</div>
	);
}
