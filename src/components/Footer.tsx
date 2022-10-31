import { SocialIcon } from 'react-social-icons';

const Footer = (): JSX.Element => {
	return (
		<footer className='bg-black text-white flex flex-col items-center pt-8 pb-4'>
			<div className='social-media space-x-4'>
				<SocialIcon url='https://www.facebook.com/unicsmcr' bgColor='white' />
				<SocialIcon url='https://www.instagram.com/unicsmcr/' bgColor='white' />
				<SocialIcon url='https://twitter.com/unicsmcr_' bgColor='white' />
				<SocialIcon url='https://www.linkedin.com/company/unics-manchester/' bgColor='white' />
				<SocialIcon url='mailto:hackathons@unicsmcr.com' bgColor='white' />
			</div>
			<p className='text-lg mt-2'>Copyright © UniCS 2022.</p>
		</footer>
	);
};

export default Footer;
