import React from 'react';
import Slider from "react-slick";
import HomeHeroSingleSlide from '../../../../components/HomeHeroSingleSlide/HomeHeroSingleSlide';
import VideoPopup from '../../../../components/VideoPopup/VideoPopup';
import useGlobalContext from '../../../../hooks/useGlobalContext';

const HomeHeroSection = () => {

   const { SlickArrowLeft, SlickArrowRight} = useGlobalContext();


   const settings = {
      autoplay: false,
      autoplaySpeed: 10000,
      dots: false,
      fade: true,
      arrows: true,
      prevArrow: <SlickArrowLeft />,
      nextArrow: <SlickArrowRight />,
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

         <VideoPopup videoId="oU_GUAWz52w" />

         <section className="hero-area">
            <div className="hero-slider">

               <Slider className='slider-active' {...settings}>

                  <HomeHeroSingleSlide bg_className="1" />

                  <HomeHeroSingleSlide bg_className="2" />

               </Slider>

            </div>
         </section>
      </>
   );
};

export default HomeHeroSection;