import { FC } from 'react';

export const Button: FC<Props> = ({children, disabled, className, onClick}) => {
	return (
		<button
			className={className}
			disabled={disabled}
			onClick={onClick}
		>
			{children}
		</button>
	)
}

type Props = {
	readonly children: string;
	readonly className?: string;
	readonly disabled?: boolean;
	readonly onClick: () => void;
}
