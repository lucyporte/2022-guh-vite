import FAQs from '@components/FAQs';
import NavBar from '@components/NavBar';
import About from '@components/About';
import Team from '@components/Team';
import Sponsors from '@components/Sponsors';
import Hero from '@components/Hero';
import Footer from '@components/Footer';

export default function App() {
	return (
		<div id='about' className='bg-white'>
			<div className='flex flex-col min-h-screen'>
				<NavBar />
				<Hero />
			</div>

			<main className='bg-guh-orange'>
				<About />
				<FAQs />
				<Team />
				<Sponsors />
			</main>
			<Footer />
		</div>
	);
}
