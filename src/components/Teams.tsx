const Team = (): JSX.Element => {
	return (
		<div id='faqs' className='text-black mt-16 mx-auto w-full px-4 max-w-screen-2xl lg:px-8 pb-8'>
			<h1 className='text-5xl text-center font-semibold mb-8'>Team</h1>
			<div className='grid grid-cols-5'>
				{[1, 2, 3, 4, 5].map(i => (
					<div className='flex flex-col mx-auto hover:-translate-y-1'>
						<div className='w-32 h-32  bg-black rounded-full'></div>
						<p className='text-center'>Member {i}</p>
						<p className='text-center'>Role</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Team;
