import Layout from './Layout';
import palantir from '../assets/Sponsors/Palantir.png';
import devotee1 from '../assets/Sponsors/devotee1.png';
import devotee2 from '../assets/Sponsors/devotee2.png';
import devotee3 from '../assets/Sponsors/devotee3.png';
import enthusiast1 from '../assets/Sponsors/enthusiast1.png';
import enthusiast2 from '../assets/Sponsors/enthusiast2.png';
import advocate1 from '../assets/Sponsors/advocate1.png';
import partner1 from '../assets/Sponsors/partner1.png';
import partner2 from '../assets/Sponsors/partner2.png';
import partner3 from '../assets/Sponsors/partner3.png';
import partner4 from '../assets/Sponsors/partner4.png';
import partner5 from '../assets/Sponsors/partner5.png';
import partner6 from '../assets/Sponsors/partner6.png';
import partner7 from '../assets/Sponsors/partner7.png';
import partner8 from '../assets/Sponsors/partner8.png';
import partner9 from '../assets/Sponsors/partner9.png';
import partner10 from '../assets/Sponsors/partner10.png';

const Sponsors = (): JSX.Element => {
    return (
        <Layout title='Sponsors'>
            <h2 className='text-center text-3xl  font-extrabold dark:text-white space-y-5 gap-5'>Forerunner</h2>
            <div className='flex flex-row mx-auto justify-center'>
                <a href="https://www.palantir.com/uk/careers/" target="_blank">
                    <img className='h-36 w-50 hover:-translate-y-1' src={palantir}/>
                </a>
            </div>
            <h2 className='text-3xl text-center font-extrabold dark:text-white my-0.5 gap-5'>Devotee</h2>
            <div
                className='grid md:grid-cols-3 grid-cols-1 gap-4 justify-self-center'
            >
                <a href="https://careers.booking.com/?utm_source=corporate&utm_medium=footer" target="_blank">
                    <img className='hover:-translate-y-1' src={devotee1}/>
                </a>
                <a className="flex flex-row justify-center " href="https://www.bet365careers.com/en" target="_blank">
                    <img className='hover:-translate-y-1' src={devotee2}/>
                </a>
                <a href="https://netcraft.com/jobs" target="_blank">
                    <img className='hover:-translate-y-1' src={devotee3}/>
                </a>
            </div>
            <h2 className='text-center text-3xl font-extrabold dark:text-white space-y-5 gap-5'>Enthusiast</h2>
            <div className='flex flex-col md:flex-row md:space-x-16 justify-center items-center'>
                <a href="https://www.mwam.com/join-us/" target="_blank">
                    <img className='h-48 hover:-translate-y-1' src={enthusiast1}/>
                </a>
                <a href="https://www.recourseai.com/" target="_blank">
                    <img className='h-48 hover:-translate-y-1' src={enthusiast2}/>
                </a>
            </div>
            <h2 className='text-center text-3xl font-extrabold dark:text-white space-y-5 gap-5'>Advocate</h2>
            <div className='md:flex-row flex-col items-center flex justify-center'>
                <a href="https://www.atmosi.com/en" target="_blank">
                    <img className='h-36 w-50 hover:-translate-y-1' src={advocate1}/>
                </a>
            </div>
            <h2 className='text-center text-3xl font-extrabold dark:text-white space-y-5 gap-5'>Partners</h2>
            <div className='flex flex-col md:flex-row space-x-5 items-center justify-center'>
                <a href="https://www.mmu.ac.uk/" target="_blank">
                    <img className='w-64 hover:-translate-y-1' src={partner1}/>
                </a>
                <a href="https://www.standoutstickers.com/?utm_campaign=events-league-organizers-spring2022&utm_medium=email&utm_source=customerio-zoho_creator_-_standout_sticker_intro" target="_blank">
                    <img className='w-64 hover:-translate-y-1' src={partner4}/>
                </a>
                <a href="https://mlh.io/" target="_blank">
                    <img className='w-64 hover:-translate-y-1' src={partner2}/>
                </a>
                <a href="https://hackathons.org.uk/" target="_blank">
                    <img className='w-64 hover:-translate-y-1' src={partner3}/>
                </a>
				<a href="https://www.domain.com" target="_blank">
					<img className='w-64 hover:-translate-y-1' src="https://findvectorlogo.com/wp-content/uploads/2022/03/domain-com-vector-logo-2022.png" />
				</a>
                <a href="https://jobs.capitalone.co.uk" target="_blank">
                    <img className='w-64 hover:-translate-y-1' src={partner5}/>
                </a>
                <a href="https://careers.blackrock.com" target="_blank">
                    <img className='w-64 hover:-translate-y-1' src={partner6}/>
                </a>
                <a href="https://coil.com" target="_blank">
                    <img className='w-64 hover:-translate-y-1' src={partner7}/>
                </a>
				<a href="https://www.deso.com" target="_blank">
                    <img className='w-64 hover:-translate-y-1' src={partner8}/>
                </a>
				<a href="https://www.wix.com/" target="_blank">
                    <img className='w-64 hover:-translate-y-1' src={partner9}/>
                </a>
				<a href="https://snyk.io/careers/" target="_blank">
                    <img className='w-64 hover:-translate-y-1' src={partner10}/>
                </a>
            </div>
        </Layout>
    );
};

export default Sponsors;


// **Forerunner**

// Palantir
// https://www.palantir.com/uk/careers/
// https://drive.google.com/file/d/1p3yiVT8keP_AB0zNEUQPqBt0urr95SRP/view?usp=sharing


// **Devotee**

// Booking.com
// https://careers.booking.com/?utm_source=corporate&utm_medium=footer
// https://drive.google.com/drive/folders/1qo4LOYbsL6vW2QssAnaQKiLTa_BQtqPU?usp=sharing

// Bet365
// https://www.bet365careers.com/en/current-vacancies
// https://drive.google.com/drive/folders/1kfKMdawu2MeWBN7rW8lfKwwgsByMSFlZ?usp=sharing

// Netcraft
// https://netcraft.com/jobs
// https://drive.google.com/file/d/1cwRFcGGZ-vlubUEWj6vEFE0H-hralXNp/view?usp=sharing


// **Enthusiast**

// Marshall Wace
// https://www.mwam.com/join-us/
// https://drive.google.com/drive/folders/1N4ii8eYw5XvGpfdwn5rhkos8J_1IKAQJ?usp=sharing

// Re:course AI
// https://www.recourseai.com/
// https://drive.google.com/file/d/1mh893ZWJYxyKyxnZiND1xTQsZ1Wgn6f0/view?usp=sharing


// **Advocate**

// Atmos International
// https://www.atmosi.com/en
// https://drive.google.com/drive/folders/1ePbjbcyv7zpfq-2_ye0Mj4VEaBFy5-QJ?usp=sharing


// **Partners**

// Manchester Metropolitan University
// https://www.mmu.ac.uk/
// https://drive.google.com/file/d/1tPnlvkAMOeAkgjYGeMACzhOuJ4TFjmK-/view?usp=sharing

// Major League Hacking
// https://mlh.io/
// https://drive.google.com/drive/folders/14kb-KcDiwevnEKoEgRzjBPiualtkBady?usp=sharing

// Hackathons UK
// https://hackathons.org.uk/
// https://drive.google.com/drive/folders/1m-J7a4nheHXJ-9B3R-_EemhpCZifmNno?usp=sharing

// StandOut Stickers
// https://www.standoutstickers.com/?utm_campaign=events-league-organizers-spring2022&utm_medium=email&utm_source=customerio-zoho_creator_-_standout_sticker_intro
// https://drive.google.com/file/d/1mKFvD5LYeX3R7IVwiVHRX4AUI5UJAM5S/view?usp=sharing
