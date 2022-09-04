import React from 'react';

import Navbar from '../components/Navbar/navbar-container';
import Footer from '../components/Footer/footer-container';

import Page from '../components/Learning/page';

const Learning = () => {
    return(
        <div className='mainPage'>
            <Navbar/>
            <Page/>
            <Footer/>
        </div>
    )
}

export default Learning;