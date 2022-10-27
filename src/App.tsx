import * as React from 'react';
import FAQs from '@components/FAQs';
import NavBar from '@components/NavBar';
import About from '@components/About';

export default function App() {
	return (
		<div id='about' className='bg-white'>
			<div className='flex flex-col min-h-screen'>
				<NavBar />
				<div className='bg-black flex-1 flex text-center text-white items-center flex-col justify-center font-medium'>
					<h1 className='text-white text-5xl'>
						<span className='text-guh-orange'>UniCS</span> presents,
					</h1>
					<h1 className='text-white text-8xl'>GreatUniHack</h1>
					<div className='pt-4 text-3xl'>
						<p className='pb-2'>
							12<sup>th</sup>&mdash;23<sup>rd</sup> November 2022
						</p>
						<p>MMU Business School</p>
					</div>
				</div>
			</div>
			<main className='bg-guh-orange'>
				<About />
				<FAQs />
			</main>
		</div>
	);
}
