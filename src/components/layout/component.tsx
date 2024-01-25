import { Props } from '../footer/types';
import { Footer } from '../footer';
import { Header } from '../header';

export const Layout = ({ children }: Props) => {
	return (
		<div className="container">
			<Header />
			{children}
			<Footer />
		</div>
	);
}
