import React, {useState} from 'react'
import navLogo from '../assets/pngegg.png'


export default function Navbar() {
    const [white, setWhite] = useState(false)

    function toggleWhite(){
        setWhite(prevWhite => !prevWhite) 
    }

    const isWhite = {
        color: white ? "white" : "black" 
    }

    return (
        <header className='main-nav'>
            <nav className="primary">
                <a href='#'>
                    <img className="main-nav__logo" src={navLogo} />
                </a>
                <input id='menu' type="checkbox" className='menu-toggle' />
                <label htmlFor="menu" style={isWhite} className='menu' onClick={toggleWhite}>Menu</label>
                <ul className='main-nav__link-list--primary'>
                    <li className="main-nav__link-list__item"><a href="#">Live</a></li>
                    <li className="main-nav__link-list__item"><a href="#">Push</a></li>
                    <li className="main-nav__link-list__item"><a href="#">Link</a></li>
                    <li className="main-nav__link-list__item"><a href="#">Packs</a></li>
                    <li className="main-nav__link-list__item"><a href="#">Help</a></li>
                    <li className="main-nav__link-list__item"><a href="#">More +</a></li>
                    {/* right aligned */}
                    <li className="main-nav__link-list__item--try"><a href="#">Try Live for free</a></li>
                    <li className="main-nav__link-list__item--account"><a href="#">Log in for register</a></li>
                </ul>
            </nav>
            <div className='hr'></div>
            <nav className='secondary'>
                <ul className="main-nav__link-list--secondary">
                    <li className="main-nav__link-list__item is-active"><a href="#">About</a></li>
                    <li className="main-nav__link-list__item"><a href="#">Jobs</a></li>
                    <li className="main-nav__link-list__item"><a href="#">Apprenticeship</a></li>
                </ul>

            </nav>
        </header>


    )
}