import { stringify } from 'querystring';
import * as React from 'react';

type TProps = {
	title: string;
	children: React.ReactNode;
};

const Layout = ({ children, title }: TProps): JSX.Element => {
	return (
		<div
			id={title.toLowerCase()}
			className='text-black pt-8 md:pt-16 mx-auto w-full px-4 max-w-screen-2xl lg:px-8 pb-4 md:pb-8'
		>
			<h1 className='text-2xl md:text-5xl text-center font-semibold mb-4 md:mb-8'>{title}</h1>
			{children}
		</div>
	);
};

export default Layout;
