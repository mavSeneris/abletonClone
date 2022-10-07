import React from "react";
import photo1 from "../assets/photo-1.jpg"
import photo2 from "../assets/photo-2.jpg"
import photo3 from "../assets/photo-3.jpg"
import photo4 from "../assets/photo-4.jpg"
import photo5 from "../assets/photo-5.jpg"
import photo6 from "../assets/photo-6.jpg"
import photo7 from "../assets/photo-7.jpg"
import photo8 from "../assets/photo-8.jpg"
import photo9 from "../assets/photo-9.jpg"


export default function Main() {
    return (
        <div className="page-about">
            <div className="page-about__image__container">
                <h1 className="page-about__ableton-logo">Ableton</h1>
                {/* <img className="page-about__main-image" src={mainImage} /> */}
            </div>

            <div className="page-about__text">
                <div className="body-text">
                    <h1>We make <a href="#">Live</a>, <a href="#">Push</a> and <a href="#">Link</a> — unique software and hardware for music creation and performance. With these products, our community of users creates amazing things.</h1>
                    <p>Ableton was founded in 1999 and released the first version of Live in 2001. Our products are used by a community of dedicated musicians, sound designers, and artists from across the world.</p>
                </div>
            </div>

            <div className="page-about__collage page-about__collage--products">
                <img className="page-about__collage-image_one" src={photo1} />
                <div className="page-about__collage__background bg-lemonade">
                    <img className="page-about__collage-image_two" src={photo2} />
                </div>
            </div>

            <div className="page-about__text has-video">
                <div className="body-text">
                    <h1>Making music isn’t easy. It takes time, effort, and learning. But when you’re in the flow, it’s incredibly rewarding.</h1>
                    <p>We feel the same way about making Ableton products. The driving force behind Ableton is our passion for what we make, and the people we make it for.</p>
                </div>
            </div>

            <div className="page-about__media">
                <a
                    className="youtube-video has-poster js-video-youtube abl-block"
                    href="https://www.youtube.com/watch?v=9SbnhgjeyXA"
                    data-video-ratio="0.5625"
                    data-youtube-id="9SbnhgjeyXA"
                >
                    <img
                        className="youtube-video__poster imgix-fluid"
                        data-src="https://ableton-production.imgix.net/about/poster-juanpe.jpg?fit=crop&auto=format&fm=jpg"
                        src="https://ableton-production.imgix.net/about/poster-juanpe.jpg?auto=format&dpr=0.90&fit=crop&fm=jpg&ixjsv=1.1.3&w=800"
                    />
                </a>
                <p className="page-about__media__caption">Why Ableton - Juanpe Bolivar</p>
            </div>

            <div className="page-about__text">
                <div className="body-text">
                    <h1>We are more than 350 people from 30 different countries divided between our headquarters in Berlin and our offices in Los Angeles and Tokyo.</h1>
                    <p>Most of us are active musicians, producers, and DJs, and many of us use Live and Push every day. We come from a wide range of cultural and professional backgrounds. Some of us have PhDs, some are self-taught, and most of us are somewhere in between. What connects us is the shared belief that each of us has the skills and knowledge to contribute to something big: helping to shape the future of music culture.</p>
                </div>
            </div>

            <div className="page-about__collage page-about__collage--people">
                <div className="page-about__collage__background bg-spearmint">
                    <img className="page-about__collage-image_three" src={photo3} />
                    <img className="page-about__collage-image_four" src={photo4} />
                </div>
                <img className="page-about__collage-image_five" src={photo5} />
            </div>

            <div className="page-about__text">
                <div className="body-text">
                    <h1>We believe it takes focus to create truly outstanding instruments. We only work on a few products and we strive to make them great.</h1>
                    <p>Rather than having a one-size-fits-all process, we try to give our people what they need to work their magic and grow. We’ve learned that achieving the best results comes from building teams that are richly diverse, and thus able to explore problems from a wider set of perspectives. We don’t always agree with each other, but opinion and debate are valued and openly encouraged.</p>
                </div>
            </div>

            <div className="page-about__media page-about__media--large">
                <img src={photo9} />
            </div>

            <div className="page-about__text">
                <div className="body-text">
                    <h1>We’re passionate about what we do, but we’re equally passionate about improving who we are</h1>
                    <p>We work hard to foster an environment where people can grow both personally and professionally, and we strive to create a wealth of opportunities to learn from and with each other.</p>
                    <p>Alongside an internal training program, employees are actively supported in acquiring new knowledge and skills, and coached on applying these in their daily work. In addition, staff-organized development and music salons are a chance to discuss new technologies, production techniques and best practices.</p>
                </div>
            </div>



            <div className="page-about__collage page-about__collage--improving">

                <div className="page-about__collage__background bg-lavender">
                    <img className="page-about__collage-image_six" src={photo6} />

                    <img className="page-about__collage-image_seven" src={photo7} />
                </div>

            </div>

            <div className="page-about__text">
                <div className="body-text">
                    <h1>We want our employees to love it here. Since we’re looking for exceptional talent from around the world, we will do everything we can to make your transition as easy as possible.</h1>
                    <p>If you're joining us in Berlin, we'll help with relocation and paperwork. We’ll even provide you with free German or English lessons. Plus, working in Germany means you can expect comprehensive health insurance for you and your family, as well as generous maternity and paternity leave. Office hours are flexible, but it’s not all work; we have several company and team outings throughout the year as well as a variety of fun, informal small-group activities.</p>
                </div>
            </div>

            <div className="page-about__collage page-about__collage--job-teaser">
                <img className="page-about__collage-image_Eight" src={photo8} />
                <div className="page-about__collage__background bg-periwinkle">
                    <h1> We’re really proud of the work we’ve done so far. But there’s so much more to come. If you’d like to be a part of it, please join us.

                        <a href="#" style={{ color: '#0000ff' }}>See latest jobs &#10148;</a>
                    </h1>
                </div>
            </div>
        </div>
    )
}