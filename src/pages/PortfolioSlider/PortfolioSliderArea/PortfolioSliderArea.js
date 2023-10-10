import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useGlobalContext from '../../../hooks/useGlobalContext';

const PortfolioSliderArea = () => {
    const { SlickArrowLeft, SlickArrowRight } = useGlobalContext();
    const settings = {
        autoplay: false,
        autoplaySpeed: 10000,
        dots: false,
        fade: true,
        arrows: true,
        prevArrow: <SlickArrowLeft/>,
        nextArrow: <SlickArrowRight/>,

    };
    return (
        <>

            <section className="portfolio-area pt-120 pb-90">
                <div className="container">
                    <Slider className='postbox__gallery mb-35' {...settings}>

                        <img src="img/portfolio/lg-1.jpg" alt="portfolio image" />
                        <img src="img/portfolio/lg-2.jpg" alt="portfolio image" />
                        <img src="img/portfolio/lg-3.jpg" alt="portfolio image" />
                        <img src="img/portfolio/lg-4.jpg" alt="portfolio image" />

                    </Slider>
                </div>
            </section>

        </>
    );
};

export default PortfolioSliderArea;