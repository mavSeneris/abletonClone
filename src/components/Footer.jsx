import React from "react"
import navLogo from '../assets/pngegg.png'
import fb from '../assets/fb.png'
import twtr from '../assets/twtr.png'
import ig from '../assets/ig.png'
import yt from '../assets/yt.png'




export default function Footer() {
    return (
        <div className="hr">
            <footer className="footer">
                <div className="hr"></div>
                <div className="footer-container">

                    <div className="footer-title">
                        <h1>Ableton</h1>
                    </div>

                    <div className="footer-grid-container">
                        <ul className="footer__grid-item footer__grid-item--info">
                            <li className="lists-item">Register Live or Push &#10148;</li>
                            <li className="lists-item">About Ableton &#10148;</li>
                            <li className="lists-item">Jobs &#10148;</li>
                            <li>
                                <ul className="test">
                                    <li><img src={fb} /></li>
                                    <li><img src={twtr} /></li>
                                    <li><img src={yt} /></li>
                                    <li><img src={ig} /></li>
                                </ul>
                            </li>
                        </ul>

                        <ul className="footer__grid-item footer__grid-item--education">
                            <li className="lists-item"><b>Education</b></li>
                            <li className="lists-item">Ableton for the classroom &#10148;</li>
                            <li className="lists-item">Ableton for Colleges and Universities &#10148;</li>
                        </ul>

                        <div className="footer__grid-item--newsletter">
                            <p><b>Sign up to our newsletter</b></p>
                            <p>Enter your email address to stay  up to date with the latest offers, tutorials, downloads, surveys, and more.</p>
                            <input
                                className="email"
                                type="email"
                                placeholder="Email"
                            />
                            <button>Sign up</button>
                        </div>

                        <ul className="footer__grid-item footer__grid-item--community">
                            <li><b>Community</b></li>
                            <li className="lists-item">Find Ableton User Groups &#10148;</li>
                            <li className="lists-item">Find Certified Training &#10148;</li>
                            <li className="lists-item">Become a Certified Trainer &#10148;</li>
                        </ul>

                        <ul className="footer__grid-item footer__grid-item--distributors">
                            <li><b>Distributors</b></li>
                            <li className="lists-item">Find Distributors &#10148;</li>
                            <li className="lists-item">Try Push in-store &#10148;</li>
                        </ul>

                        <div className="footer__grid-item footer__grid-item--langandloc">
                            <div><b>Language and Location</b></div>
                            <select
                                className="lang"
                            >
                                <option value="english">English</option>
                                <option value="spanish">Spanish</option>
                                <option value="portuguese">Portuguese</option>
                                <option value="japanese">Japanese</option>
                                <option value="italian">Italian</option>
                                <option value="french">French</option>
                                <option value="malay">Malay</option>
                                <option value="tagalog">Tagalog</option>
                            </select>

                            <select
                                // id="favColor"
                                // value={formData.favColor}
                                // onChange={handleChange}
                                name="favColor"
                                className="loc"
                            >
                                <option value="philippines">Philippines</option>
                                <option value="canada">Canada</option>
                                <option value="peru">Peru</option>
                                <option value="australia">Australia</option>
                                <option value="japan">Japan</option>
                                <option value="indonesia">Indonesia</option>
                                <option value="spain">Spain</option>
                                <option value="italy">Italy</option>
                            </select>
                        </div>


                    </div>
                    <div className="footer__link-list">
                        <ul className="links">
                            <li className="footer__link-list__item"><a href="#">Contact Us</a></li>
                            <li className="footer__link-list__item"><a href="#">Press Resources</a></li>
                            <li className="footer__link-list__item"><a href="#">Legal Info</a></li>
                            <li className="footer__link-list__item"><a href="#">Privacy Info</a></li>
                            <li className="footer__link-list__item"><a href="#">Cookie Settings</a></li>
                            <li className="footer__link-list__item imprint"><a href="#">Imprint</a></li>
                            <li><small>Made in Berlin</small></li>
                        </ul>
                        <img className="footer__logo" src={navLogo} />
                    </div>
                </div>
            </footer>
        </div>
    )
}