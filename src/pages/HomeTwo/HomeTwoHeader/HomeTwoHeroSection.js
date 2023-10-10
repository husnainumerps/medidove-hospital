import React from 'react';
import { Link } from 'react-router-dom';
import VideoPopup from '../../../components/VideoPopup/VideoPopup';
import useGlobalContext from '../../../hooks/useGlobalContext';

const HomeTwoHeroSection = () => {
   const values = useGlobalContext();
   const { setIsOpen } = values;
   return (
      <>
         <VideoPopup videoId="oU_GUAWz52w" />

         <section className="hero-area">
            <div className="hero-slider hero_two_slider">
               <div className="slider-active">
                  <div className="single-slider slider-height slider-height-2 d-flex align-items-center"
                  data-background="img/slider/slider-bg-2.jpg">
                     <div className="container">
                        <div className="row align-items-center">
                           <div className="col-xl-6 col-lg-6 col-md-10">
                              <div className="hero-text hero-text-2 pt-35">
                                 <div className="hero-slider-caption hero-slider-caption-2">
                                    <h5 className="white-color">We are here for your care.</h5>
                                    <h1 className="white-color" >Best Care & Better Doctor.</h1>
                                 </div>
                                 <div className="hero-slider-btn">
                                    <Link to="/about" className="primary_btn btn-icon btn-icon-blue ml-0"><span>+</span>about us</Link>
                                    <button onClick={() => setIsOpen(true)} className="play-btn popup-video"><i className="fas fa-play"></i></button>
                                 </div>
                              </div>
                           </div>
                           <div className="col-xl-5 offset-xl-1 col-lg-6 col-md-12">
                              <div className="slider-right-2">
                                 <div className="caregive-box">
                                    <div className="search-form">
                                       <span className="sub-heading">We are here for you</span>
                                       <h3>Find A Care Giver</h3>
                                    </div>
                                    <div className="row">
                                       <div className="col-xl-12">
                                          <div className="appoinment-form-box appoinment-form-box-option d-flex mb-40">
                                             <div className="appoint-ment-icon">
                                                <img src="img/icon/caregive-option-icon-2.png" alt=""/>
                                             </div>
                                             <form className="appointment-form-2" action="#">
                                                <label htmlFor="input">select your location</label>
                                                <select name="lc" id="lc" className="postform">
                                                   <option defaultValue="-1">Choose A Location</option>
                                                   <option className="level-0" defaultValue="36">Chicago, United States</option>
                                                   <option className="level-0" defaultValue="37">California, United States</option>
                                                </select>

                                             </form>
                                          </div>
                                       </div>
                                       <div className="col-xl-12">
                                          <div className="appoinment-form-box appoinment-form-box-option d-flex mb-40">
                                             <div className="appoint-ment-icon">
                                                <img src="img/icon/caregive-option-icon-2.png" alt=""/>
                                             </div>
                                             <form className="appointment-form-2" action="#">
                                                <label htmlFor="input">select your services</label>
                                                <select name="lc" id="lc" className="postform">
                                                   <option defaultValue="-1">Choose A Service</option>
                                                   <option className="level-0" defaultValue="36">Chicago, United States</option>
                                                   <option className="level-0" defaultValue="37">California, United States</option>
                                                </select>
                                             </form>
                                          </div>
                                       </div>
                                       <div className="col-xl-12 mb-35">
                                          <div className="inner caregive-btn text-center">
                                             <Link to="/contact" className="primary_btn gray-btn-border">Make Appointment</Link>
                                          </div>
                                       </div>
                                    </div>
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

export default HomeTwoHeroSection;