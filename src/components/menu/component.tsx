import { IMenu } from '../../types/interfaces.ts';
import { Dish } from '../dish/components.tsx';

export const Menu = ({menu}: Props) => {
	return (
		<div>
			{menu?.map((dish: IMenu) => (
				<Dish key={dish.id} {...dish} />
			))}
		</div>
	);
}

type Props = {
	menu: IMenu[] | undefined;
}
