const Hero = (): JSX.Element => {
	return (
		<div className='bg-black flex-1 flex flex-col text-center text-white font-medium'>
			<div className='flex flex-row-reverse lg:px-32'>
				{/* <img
					className='w-32 h-32 relative float-right'
					src='https://s3.amazonaws.com/logged-assets/trust-badge/2022/mlh-trust-badge-2022-blue.svg'
					alt='Major League Hacking 2022 Hackathon Season'
				/> */}
				<a
					id='mlh-trust-badge'
					className='relative float-right'
					href='https://mlh.io/eu?utm_source=eu-hackathon&utm_medium=TrustBadge&utm_campaign=2023-season&utm_content=yellow'
					target='_blank'
				>
					<img
						src='https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-yellow.svg'
						alt='Major League Hacking 2023 Hackathon Season'
						className='w-32 h-32 '
					/>
				</a>
			</div>
			{/* Desktop navbar */}
			<div className='flex-1 flex items-center flex-col justify-center'>
				<h1 className='text-white lg:text-5xl text-3xl'>
					<span className='text-guh-orange'>UniCS</span> presents
				</h1>
				<h1 className='text-white lg:text-8xl text-5xl'>GreatUniHack</h1>
				<div className='pt-4 lg:text-3xl text-2xl'>
					<p className='pb-2'>
						12<sup>th</sup>&mdash;13<sup>th</sup> November 2022
					</p>
					<p className='lg:text-2xl text-xl font-light'>MMU Business School, M15 6BH</p>
				</div>
			</div>
		</div>
	);
};

export default Hero;
