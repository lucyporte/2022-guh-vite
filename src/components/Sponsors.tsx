import Layout from './Layout';
import sponsors from '../assets/sponsors.png';

const Sponsors = (): JSX.Element => {
	return (
		<Layout title='Sponsors'>
			<img className='w-full' src={sponsors} />
		</Layout>
	);
};

export default Sponsors;
