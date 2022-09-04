import React from 'react';

import Navbar from '../components/Navbar/navbar-container';
import Footer from '../components/Footer/footer-container';

import Page from '../components/About/page';

const AboutUs = () => {
    return(
        <div className='mainPage'>
            <Navbar/>
            <Page/>
            <Footer/>
        </div>
    )
}

export default AboutUs;