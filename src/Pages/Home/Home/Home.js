import React from 'react';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';
import About from './About/About';
import Appointment from './Appointment/Appointment';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <Appointment></Appointment>
        </div>
    );
};

export default Home;