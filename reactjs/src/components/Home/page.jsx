import './page-style.css';

const Home = () => {
    return(
        <div className=''>
            <section className='section' id='home'>
                <div className='home bg-grid'>
                    <div className='home-header'>
                        <img src='https://imgur.com/9YoxWMQ.jpg'/>
                    </div>
                    <div className='home-data'>
                        <h1 className='home-title'>CodeFR</h1>
                        <p className='home-description'>
                            Découvrez une nouvelle façon <br></br>
                            De dev.
                        </p>
                        <a href='' className='home-button'>Nous rejoindre</a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;