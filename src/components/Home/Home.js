import React from 'react';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Hero from '../Hero/Hero';
import Navbar from '../Navbar/Navbar';
import Pricing from '../Pricing/Pricing';
import Services from '../Services/Services';
import Status from '../Status/Status';
import Step from '../Step/Step';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <Services></Services>
            <Status></Status>
            <Step></Step>
            <Pricing></Pricing>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;