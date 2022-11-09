import React from 'react';
import photo1 from '../../../../dentist-assets/about/Capture.PNG'
import photo2 from '../../../../dentist-assets/about/Capture1.PNG'

const About = () => {
    return (
        <div className="hero my-12 w-full">
            <div className="hero-content flex-col lg:flex-row">
                <div className='relative lg:w-1/2 md:w-2/2 sm:w-2/2 lg:pb-6'>
                    <img src={photo2} alt="" className="w-4/5 h-full rounded-lg shadow-2xl" />
                    <img src={photo1}  alt="" className="absolute right-5 top-1/2 w-3/5 border-8 rounded-lg shadow-2xl" />
                </div>
                <div className='lg:w-1/2 md:w-2/2 sm:w-2/2 mt-3'>
                    <h1 className="my-5 text-3xl font-bold">Meet<br />
                        <span className='text-primary text-5xl'>Dr. Md. Abdullah Khan</span><br />
                        </h1>
                    <ul className='py-6 text-primary'>
                            <li>Professional Degree: BDS, PGT(Japan)</li>
                            <li>Designation: Consultant</li>
                            <li>Specialist On: Dental Surgeon</li>
                            <li>Phone Number: +880-2-8625317</li>
                            <li>Chamber Name: Metropolitan Dental</li>
                        </ul>
                    <p>More than 20+ years of experience along with solving minor & major dental problems of all ages.</p>
                    <p>Availability of Female Doctor.</p>
                </div>
            </div>
        </div>
    );
};

export default About;