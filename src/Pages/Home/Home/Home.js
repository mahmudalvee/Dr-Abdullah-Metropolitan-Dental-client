import React from 'react';
import Banner from '../Banner/Banner';
import About from './About/About';
import Appointment from './Appointment/Appointment';
import HomeServices from './HomeServices/HomeServices';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeServices></HomeServices>
            <About></About>
            <Appointment></Appointment>
        </div>
    );
};

export default Home;