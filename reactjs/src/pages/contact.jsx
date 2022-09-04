import React from 'react';

import Navbar from '../components/Navbar/navbar-container';
import Footer from '../components/Footer/footer-container';

import Page from '../components/Contact/page';

const Contact = () => {
    return(
        <div className='mainPage'>
            <Navbar/>
            <Page/>
            <Footer/>
        </div>
    )
}

export default Contact;