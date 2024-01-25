import { Menu } from '../../interfaces/interfaces.ts';

export const MenuItem = ({id, name}: Partial<Menu>) => {
	return (
		<li key={id}>{name}</li>
	);
}
