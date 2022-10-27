const Hero = (): JSX.Element => {
	return (
		<div className='bg-black flex-1 flex flex-col text-center text-white font-medium'>
			<div className='flex flex-row-reverse px-32'>
				<img
					className='w-32 h-32 relative float-right'
					src='https://s3.amazonaws.com/logged-assets/trust-badge/2022/mlh-trust-badge-2022-blue.svg'
					alt='Major League Hacking 2022 Hackathon Season'
				/>
			</div>
			<div className='flex-1 flex items-center flex-col justify-center'>
				<h1 className='text-white text-5xl'>
					<span className='text-guh-orange'>UniCS</span> presents,
				</h1>
				<h1 className='text-white text-8xl'>GreatUniHack</h1>
				<div className='pt-4 text-3xl'>
					<p className='pb-2'>
						12<sup>th</sup>&mdash;13<sup>rd</sup> November 2022
					</p>
					<p className='text-2xl font-light'>MMU Business School, M15 6BH</p>
				</div>
			</div>
		</div>
	);
};

export default Hero;
