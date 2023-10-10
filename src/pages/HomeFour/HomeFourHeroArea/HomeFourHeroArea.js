import React from 'react';
import Slider from "react-slick";
import HomeFourSingleHeroSlide from '../../../components/HomeFourSingleHeroSlide/HomeFourSingleHeroSlide';
import useGlobalContext from '../../../hooks/useGlobalContext';

const HomeFourHeroArea = () => {
   const { SlickArrowLeft, SlickArrowRight} = useGlobalContext();

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
    return (
        <>
          <section className="hero-area">
             <div className="hero-slider">

                <Slider className='slider-active' {...settings}>

                   <div className="single-slider h4slider-bg pos-rel d-flex align-items-center pl-55">

                      <div className="container-fluid">
                         <div className="row">
                            <HomeFourSingleHeroSlide />
                         </div>
                      </div>
                   </div>

                   <div className="single-slider h4slider-bg pos-rel d-flex align-items-center pl-55">
                      <div className="container-fluid">
                         <div className="row">
                            <HomeFourSingleHeroSlide />
                         </div>
                      </div>
                   </div>

                </Slider>

             </div>
          </section>
        </>
    );
};

export default HomeFourHeroArea;