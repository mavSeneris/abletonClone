import React from 'react'
import navLogo from '../assets/pngegg.png'


export default function Navbar() {
    return (
        <header className='main-nav'>
            <nav className="primary">
                <a href='#'>
                    <img className="main-nav__logo" src={navLogo} />
                </a>
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
            <hr/>
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