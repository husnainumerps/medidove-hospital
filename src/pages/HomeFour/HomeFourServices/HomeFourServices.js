import React from 'react';
import HomeFourSingleService from '../../../components/HomeFourSingleService/HomeFourSingleService';
import Slider from "react-slick";
import useGlobalContext from '../../../hooks/useGlobalContext';

const HomeFourServices = () => {
   const { SlickArrowLeft, SlickArrowRight } = useGlobalContext();
   const settings = {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 300,
      prevArrow: <SlickArrowLeft />,
      nextArrow: <SlickArrowRight />,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
               infinite: true,
               arrows: false,
            }
         },
         {
            breakpoint: 991,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1
            }
         },
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
               arrows: false,
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
         <section className="services-area services-border pos-rel pt-185 pb-160">
            <span className="h4services-bg">
               <img src="img/home4/services/services__overlay__bg.png" alt="" />
            </span>
            <div className="container">
               <div className="row">
                  <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                     <div className="section-title text-center pos-rel mb-75">
                        <div className="section-icon">
                           <img className="section-back-icon" src="img/section/section-back-icon.png" alt="" />
                        </div>
                        <div className="section-text pos-rel">
                           <h5>Departments</h5>
                           <h1>Managed Your Heathcare Services</h1>
                        </div>
                        <div className="section-line pos-rel">
                           <img src="img/shape/section-title-line.png" alt="" />
                        </div>
                     </div>
                  </div>
               </div>
               {/* <div className="row h4service-active"> */}
               <Slider className='h4service-active h4_services_slider' {...settings}>
                  <HomeFourSingleService image="1" name="surgery" title="Body Surgery" />
                  <HomeFourSingleService image="2" name="dental" title="Dental Fillings" />
                  <HomeFourSingleService image="3" name="neurology" title="Neurology Sargery" />
                  <HomeFourSingleService image="1" name="surgery" title="Body Surgery" />
               </Slider>

               {/* </div> */}
            </div>
         </section>
      </>
   );
};

export default HomeFourServices;