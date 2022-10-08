import React, { useState } from 'react'
import navLogo from '../assets/pngegg.png'
import navLogoWhite from '../assets/logowhite.png'

export default function Navbar() {
    const [white, setWhite] = useState(false)
    const [isMore, setIsMore] = useState(false)

    function toggleMore() {
        setIsMore(prevIsMore => !prevIsMore)
    }
    function toggleWhite() {
        setWhite(prevWhite => !prevWhite)
    }

    const display = {
        display: isMore ? "block" : "none"
    }
    const isWhite = {
        color: white ? "white" : "black"
    }

    return (
        <header className='main-nav'>
            <nav className="primary">
                <a href='#'>
                    <img className="main-nav__logo" src={white ? navLogoWhite : navLogo} />
                </a>
                <input id='menu' type="checkbox" className='menu-toggle' />
                <label htmlFor="menu" style={isWhite} className='menu' onClick={toggleWhite}>
                    {white ? "Menu" : "Menu"}
                    {white ?
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 10l4 4H8z"></path></g></svg> :
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 14l-4-4h8z"></path></g></svg>
                    }
                </label>
                <ul className='main-nav__link-list--primary'>
                    <li className="main-nav__link-list__item"><a href="#">Live</a></li>
                    <li className="main-nav__link-list__item"><a href="#">Push</a></li>
                    <li className="main-nav__link-list__item"><a href="#">Link</a></li>
                    <li className="main-nav__link-list__item"><a href="#">Packs</a></li>
                    <li className="main-nav__link-list__item"><a href="#">Help</a></li>
                    <li className="main-nav__link-list__item"><a href="#" onClick={toggleMore}>{isMore ? "More   --":"More +"}</a></li>
                    {/* right aligned */}
                    <li className="main-nav__link-list__item--try"><a href="#">Try Live for free</a></li>
                    <li className="main-nav__link-list__item--account"><a href="#">Log in for register</a></li>
                </ul>







                {/* MORE */}
                {isMore && <div className='main-nav__more js-main-nav-more-wrapper'>
                    <section className='main-nav__section js-main-nav-more-section'>
                        <h3 className='main-nav__section-heading'></h3>
                        <ul className='main-nav__link-list'>
                            <li className='main-nav__link-list__item'></li>
                            <li className='main-nav__link-list__item'></li>
                            <li className='main-nav__link-list__item'></li>
                            <li className='main-nav__link-list__item'></li>
                            <li className='main-nav__link-list__item'></li>
                            <li className='main-nav__link-list__item'></li>
                            <li className='main-nav__link-list__item'></li>
                        </ul>
                    </section>
                    <section className='main-nav__section main-nav__pt-section'>
                        <h3 className='main-nav__section-heading'></h3>
                        <div className='main-nav__slideable-wrapper'>
                            <div className='main-nav__row main-nav__link-list'>
                                <li className='main-nav__col main-nav__col--25p'></li>
                                <li className='main-nav__col main-nav__col--25p'></li>
                                <li className='main-nav__col main-nav__col--25p'></li>
                                <li className='main-nav__col main-nav__col--25p'></li>

                            </div>
                        </div>
                    </section>
                </div>}





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