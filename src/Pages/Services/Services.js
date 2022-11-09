import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect( () =>{
        fetch('services.json')
        .then(res =>res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div className='my-6'>
            <div className='text-center mb-4'>
                <h2 className="text-3xl text-primary font-semibold">Our Special Services</h2>
                <p className='lg:w-8/12 mx-auto mt-6'>We provide general dental examination and treatment for adults to children, e.g. dental consultation on dental health care, emergency dental treatment, and dental hygiene at low cost.</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;