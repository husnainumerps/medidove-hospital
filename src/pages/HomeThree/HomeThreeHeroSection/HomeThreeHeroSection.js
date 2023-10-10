import React from 'react';
import { Link } from 'react-router-dom';
import VideoPopup from '../../../components/VideoPopup/VideoPopup';
import useGlobalContext from '../../../hooks/useGlobalContext';

const HomeThreeHeroSection = () => {
   const {setIsOpen} = useGlobalContext();

    return (
        <>

          <VideoPopup videoId="oU_GUAWz52w" />

          <section className="hero-area">
             <div className="hero-slider">
                <div className="slider-fix">
                   <div className="single-slider home_three slider-height slider-height-3 d-flex align-items-center"
                   data-background="img/slider/slider-bg-3.jpg">
                      <div className="container">
                         <div className="row">
                            <div className="col-xl-7 col-lg-9">
                               <div className="hero-text hero-text-box">
                                  <div className="hero-slider-caption ">
                                     <h5>We are here for your care.</h5>
                                     <h1>Best Care & Better Doctor.</h1>
                                     <p>Lorem ipsum dolor sit amet,
                                        consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                        dolore magna
                                        aliqua.</p>
                                  </div>
                                  <div className="hero-slider-btn">
                                     <Link to="/contact"
                                        className="primary_btn btn-icon ml-0"><span>+</span>Make Appointment</Link>
                                     <button onClick={() => setIsOpen(true)}
                                        className="play-btn popup-video"><i className="fas fa-play"></i></button>
                                  </div>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </section>
        </>
    );
};

export default HomeThreeHeroSection;