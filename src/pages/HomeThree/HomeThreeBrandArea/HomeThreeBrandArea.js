import React from 'react';
import Slider from "react-slick";
import BrandLogo from '../../../components/BrandLogo/BrandLogo';


const HomeThreeBrandArea = () => {
    const settings = {
        autoplay: false,
        autoplaySpeed: 10000,
        dots: false,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    arrows: false
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false
                }
            },
        ]

    };
    return (
        <>
            <section className="brand-area pos-rel pt-115 pb-110">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 offset-xl-3">
                            <div className="about-title text-center mb-70 position-relative">
                                <h5 className="green-color">Sponsors</h5>
                                <h1 className="white-color">Our Some Popular Sponsors.</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <Slider className='brand-active' {...settings}>

                            <BrandLogo imagePath="brand/brand1" />
                            <BrandLogo imagePath="brand/brand2" />
                            <BrandLogo imagePath="brand/brand3" />
                            <BrandLogo imagePath="brand/brand4" />
                            <BrandLogo imagePath="brand/brand5" />
                            <BrandLogo imagePath="brand/brand6" />
                            <BrandLogo imagePath="brand/brand2" />

                        </Slider>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeThreeBrandArea;