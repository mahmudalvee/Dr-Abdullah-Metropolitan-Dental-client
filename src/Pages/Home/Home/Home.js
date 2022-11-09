import React from 'react';
import Banner from '../Banner/Banner';
import About from './About/About';
import Appointment from './Appointment/Appointment';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Appointment></Appointment>
        </div>
    );
};

export default Home;