import React from 'react';

import Navbar from '../components/Navbar/navbar-container';
import Footer from '../components/Footer/footer-container';

import Page from '../components/Team/page';

const Team = () => {
    return(
        <div className='mainPage'>
            <Navbar/>
            <Page/>
            <Footer/>
        </div>
    )
}

export default Team;