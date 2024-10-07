import React from 'react';
import Header from '../header/header';
import Home from '../home/home';
import About from '../about/about';
import Videos from '../videos/videos';
import Footer from '../footer/footer';
import './landingpage.css';

const LandingPage = () => {
    return (
        <div>
            <Header />
            <Home />
            <About />
            <Videos />
            <Footer />
        </div>
    );
};

export default LandingPage;