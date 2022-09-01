import './navbar-container.css';

const Navbar = () => {
    return(
        <div className='navbar'>
            <ul className='nav_list'>
                <li className='nav_item'>
                    <a href='contact' className='nav_link'>Contact</a>
                </li>
                <li className='nav_item'>
                    <a href='about' className='nav_link'>A propos</a>
                </li>
                <li className='nav_item'>
                    <a href='learning' className='nav_link'>Apprentissage</a>
                </li>
                <li className='nav_item'>
                    <a href='home' className='nav_link'>Acceuil</a>
                </li>
            </ul>
            <div className='logo'>
                <img src='https://imgur.com/cZLDjTv.jpg' className='img'></img>
            </div>
        </div>
    )
}


export default Navbar;