import React from "react";
import mainImage from "../assets/header.png"

export default function Main(){
    return(
        <div className="page-about">
            <div className="page-about__image__container">
                <h1 className="page-about__ableton-logo">Ableton</h1>
                <img className="page-about__main-image" src={mainImage}/>
            </div>
        </div>
    )
}