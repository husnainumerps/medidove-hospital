import React from 'react';
import HomeFourSinglePhotoGallery from '../../../components/HomeFourSinglePhotoGallery/HomeFourSinglePhotoGallery';
import Slider from "react-slick";
import useGlobalContext from '../../../hooks/useGlobalContext';

const HomeFourPhotoGallery = () => {
   const { SlickArrowLeft, SlickArrowRight } = useGlobalContext();
   // setting
   const settings = {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 300,
      prevArrow: <SlickArrowLeft />,
      nextArrow: <SlickArrowRight />,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
         {
            breakpoint: 991,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1
            }
         },
         {
            breakpoint: 576,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               arrows: false,
            }
         }
      ]

   };
   return (
      <>
         <section className="photogallery pt-130 pb-180">
            <div className="container">
               <div className="row">
                  <div className="col-lg-5">
                     <div className="about-title mb-65">
                        <h5 className="pink-color">Photo Gallery</h5>
                        <h1>Let’s See Latest Photo Album</h1>
                     </div>
                  </div>
               </div>

               <Slider className='h4gallery-active h4_services_slider h4_photogallery' {...settings}>
                  <HomeFourSinglePhotoGallery image="b" title="Our Hospitality" />
                  <HomeFourSinglePhotoGallery image="b2" title="Trusted Partner" />
                  <HomeFourSinglePhotoGallery image="b" title="Trusted Partner" />
               </Slider>

            </div>
         </section>
      </>
   );
};

export default HomeFourPhotoGallery;