import React from "react";
import mainImage from "../assets/header.png"
import productImageOne from "../assets/photo-1.jpg"
import productImageTwo from "../assets/photo-2.jpg"


export default function Main() {
    return (
        <div className="page-about">
            <div className="page-about__image__container">
                <h1 className="page-about__ableton-logo">Ableton</h1>
                <img className="page-about__main-image" src={mainImage} />
            </div>

            <div className="page-about__text">
                <div className="body-text">
                    <h1>We make Live, Push and Link — unique software and hardware for music creation and performance. With these products, our community of users creates amazing things.</h1>
                    <p>Ableton was founded in 1999 and released the first version of Live in 2001. Our products are used by a community of dedicated musicians, sound designers, and artists from across the world.</p>
                </div>
            </div>

            <div className="page-about__collage page-about__collage--products">
                <div className="page-about__collage__background bg-lemonade"></div>
                <img className="page-about__collage-image_one" src={productImageOne} />
                <img className="page-about__collage-two" src={productImageTwo} />
            </div>
        </div>
    )
}