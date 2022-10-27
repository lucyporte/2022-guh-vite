import * as React from 'react';
import GUHLogo from '../assets/guh.svg';

const NavBar = (): JSX.Element => {
	return (
		<nav className='bg-guh-orange flex items-center justify-between py-4 px-32'>
			<img src={GUHLogo} className='h-20' />
			<ul className='flex flex-row items-baseline space-x-8 text-lg font-medium'>
				<li>
					<a href='#about'>About</a>
				</li>
				<li>
					<a href='#faqs'>FAQ</a>
				</li>
				<li>Sponsors</li>
				<li>Contact</li>
			</ul>
		</nav>
	);
};

export default NavBar;
