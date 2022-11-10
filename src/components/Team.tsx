import team from '@data/team.json';
import Layout from './Layout';

const Team = (): JSX.Element => {
    return (
        <Layout title='Team'>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4'>
                {team.map(({name, role, img, linkedin}, i) => (
                    <a key={`team_${i}`}
                       className='flex flex-col mx-auto hover:-translate-y-1 items-center content-around'
                       href={linkedin}>
                        {img ? (
                            <img className='h-32 w-32 rounded-full' src={img} alt='Image of team member'/>
                        ) : (
                            <div className='h-32 w-32 rounded-full bg-gray-500'></div>
                        )}
                        <p className='text-center text-lg font-bold'>{name}</p>
                        <p className='text-center text-md'>{role}</p>
                    </a>
                ))}
            </div>
        </Layout>
    );
};

export default Team;
