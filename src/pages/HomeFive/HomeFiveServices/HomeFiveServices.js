import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import useGlobalContext from '../../../hooks/useGlobalContext';

const HomeFiveServices = () => {
   const { SlickArrowLeft, SlickArrowRight } = useGlobalContext();
   // slick setting
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
   const servicesData = [
      {
         id: 1,
         serviceThumb: 'h4__services__thumb1.png',
         serviceTitle: 'surgery',
         serviceSubtitle: 'Body Surgery'
      },
      {
         id: 2,
         serviceThumb: 'h4__services__thumb2.png',
         serviceTitle: 'dental',
         serviceSubtitle: 'Dental Fillings'
      },
      {
         id: 3,
         serviceThumb: 'h4__services__thumb3.png',
         serviceTitle: 'Neurology',
         serviceSubtitle: 'Neurology Sargery'
      },
      {
         id: 4,
         serviceThumb: 'h4__services__thumb2.png',
         serviceTitle: 'dental',
         serviceSubtitle: 'Dental Fillings'
      },
   ]
   return (
      <>
         <section className="services-area h5_services gray-bg pos-rel pt-185 pb-160">
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

               <Slider className='h4service-active h5service-active h5_services_slider' {...settings}>
                  {
                     servicesData.map((service, index) => {
                        const { serviceThumb, serviceTitle, serviceSubtitle } = service;
                        return (
                           <div className="h4service-item" key={index}>
                              <div className="h4service-box white-bg mb-30">
                                 <div className="service-thumb pos-rel mb-0">
                                    <img src={`img/home4/services/${serviceThumb}`} alt="" />
                                    <Link className="h4services-tag green-bg white-color text-uppercase f-700"
                                       to="/servicesDetails">{serviceTitle}</Link>
                                 </div>
                                 <div className="service-content h4services-content h6services-content">
                                    <h3><Link to="/servicesDetails">{serviceSubtitle}</Link></h3>
                                    <p className="mb-20">Ut enim minim veniam quis nost rexercitation ullamco laboris </p>
                                    <div className="h5services-bottom">
                                       <span><i><img src="img/icon/h5manage__icon.png" alt="" /></i><span className="f-500">07 Specialist Doctors</span></span>
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

export default HomeFiveServices;