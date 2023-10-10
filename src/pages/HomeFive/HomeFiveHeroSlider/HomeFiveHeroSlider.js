import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import useGlobalContext from '../../../hooks/useGlobalContext';

const HomeFiveHeroSlider = () => {
   const { SlickArrowLeft, SlickArrowRight } = useGlobalContext();
   const settings = {
      autoplay: false,
      autoplaySpeed: 10000,
      dots: false,
      fade: true,
      arrows: true,
      prevArrow: <SlickArrowLeft/>,
      nextArrow: <SlickArrowRight/>,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: true,
            }
         },
         {
            breakpoint: 991,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               arrows: false
            }
         },
         {
            breakpoint: 767,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               arrows: false
            }
         }
      ]
   };
   const sliderData = [
      {
         id: 1,
      },
      {
         id: 2,
      },
   ]
   return (
      <>
         <section className="hero-area">
            <div className="hero-slider">
               <Slider className='slider-active' {...settings}>
                  {
                     sliderData.map((slider, index) => {
                        return (
                           <div key={index} className="single-slider h4slider-bg h5slider_bg pos-rel d-flex align-items-center
                           ps-55">
                              <div className="container-fluid">
                                 <div className="row">
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
                                             <Link to="/about"
                                                className="primary_btn btn-icon ml-0"><span>+</span>learn more</Link>
                                             <Link to="/services"
                                                className="primary_btn btn-icon btn-icon-green ml-0"><span>+</span>Our services</Link>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        )
                     })
                  }
               </Slider>

            </div>
         </section>
      </>
   );
};

export default HomeFiveHeroSlider;