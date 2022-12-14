import React from 'react';

import Navbar from '../components/Navbar/navbar-container';
import Footer from '../components/Footer/footer-container';

import Home from '../components/Home/page';

const Main = () => {
    return(
        <div className='mainPage'>
            <Navbar/>
            <Home/>
            <Footer/>
        </div>
    )
}

export default Main;