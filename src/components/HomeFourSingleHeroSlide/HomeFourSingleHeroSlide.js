import React from 'react';
import { Link } from 'react-router-dom';

const HomeFourSingleHeroSlide = () => {
    return (
        <>
            <div className="col-xl-8 col-lg-12 col-md-10">
                <div className="hero-text">
                    <div className="hero-slider-caption h4hero-content mb-35">
                        <h1 className="white-color">Health & Doctor</h1>
                        <p className="white-color">Avoids pleasure itself, because it is pleasure, but because those who do not know how rationally encounter consequences that extremely system weathe.</p>

                        <div className="h4-span">
                            <span className="white-color"><i className="fal fa-arrow-circle-right"></i><span>Digital Laboratory & Computerized System</span></span>
                            <span className="white-color"><i className="fal fa-arrow-circle-right"></i><span>Digital Laboratory & Computerized System</span></span>
                        </div>

                    </div>
                    <div className="hero-slider-btn h4hero-btn">
                        <Link to="/appoinment" className="primary_btn btn-icon ms-0"><span>+</span>learn more</Link>
                        <Link to="/appoinment" className="primary_btn btn-icon btn-icon-green ms-0"><span>+</span>Our services</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeFourSingleHeroSlide;