import { ReactNode } from 'react';
import { Footer } from '../footer/component';
import { Header } from '../header/component';

export const Layout = ({ children }: Props) => {
	return (
		<div className="container">
			<Header />
			{children}
			<Footer />
		</div>
	);
}

export type Props = {
	children: ReactNode
}
