import './footer-container.css';

const Footer = () => {
    return(
        <div className='footer'>
            <ul className='footer_nav'>
                <li className='nav_item'>
                    <h2 className='nav_title'>Catalogue</h2>

                    <ul className='nav_ul'>
                        <li>
                            <a href='/home'>Accueil</a>
                        </li>
                        <li>
                            <a href='/learning'>Apprentissage</a>
                        </li>
                        <li>
                            <a href='/about-us'>A propos</a>
                        </li>
                        <li>
                            <a href='/team'>Notre équipe</a>
                        </li>
                        <li>
                            <a href='/contact'>Nous contacter</a>
                        </li>
                    </ul>
                </li>
                <li className='nav_item'>
                    <h2 className='nav_title'>Nos réseaux</h2>

                    <ul className='nav_ul'>
                        <li>
                            <a href=''>Discord</a>
                        </li>
                        <li>
                            <a href=''>Github</a>
                        </li>
                        <li>
                            <a href=''>Twitter</a>
                        </li>
                        <li>
                            <a href=''>Instagram</a>
                        </li>
                        <li>
                            <a href=''>TikTok</a>
                        </li>
                    </ul>
                </li>

                <li className='nav_item'>
                    <h2 className='nav_title'>Légal & Politique</h2>

                    <ul className='nav_ul'>
                        <li>
                            <a href=''>Politique de confidentialitée</a>
                        </li>
                        <li>
                            <a href=''>Termes des services</a>
                        </li>
                        <li>
                            <a href=''>Charte graphique</a>
                        </li>
                    </ul>
                </li>
            </ul>
            <div className='legal'>
                <p>&copy; 2022 CodeFR. Tous droits réservés.</p>
            </div>
        </div>
    )
}


export default Footer;