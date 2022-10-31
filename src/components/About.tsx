import Layout from './Layout';

const About = () => {
	return (
		<Layout title='About'>
			<p className='text-justify md:text-2xl text-lg'>
				We are GreatUniHack, an annual 24-hour student-oriented hackathon organised by the University of Manchester
				computer science society, UniCS. Since 2014, we have brought together 2500 students from 88 universities across
				Europe to work and develop innovative ideas in a competitive environment. This year's edition aims to introduce
				a new generation of developers with great potential for improving the technology industry and community through
				our hackathon.
			</p>
		</Layout>
	);
};

export default About;
