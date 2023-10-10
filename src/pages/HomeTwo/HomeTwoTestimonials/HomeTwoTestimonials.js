import React from 'react';
import HomeTwoSingleTestimonial from '../../../components/HomeTwoSingleTestimonial/HomeTwoSingleTestimonial';
import Slider from "react-slick";

const HomeTwoTestimonials = () => {
   //
   const settings = {
      autoplay: false,
      autoplaySpeed: 10000,
      dots: false,
      arrows: false,
      slidesToShow: 2,
      slidesToScroll: 2,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
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
      ]

   };
   return (
      <>
         <div className="testimonials-area pt-115 pb-120">
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1 col-md-10 offset-md-1">
                     <div className="section-title text-center pos-rel mb-70">
                        <div className="section-icon">
                           <img className="section-back-icon" src="img/section/section-back-icon.png" alt=""/>
                        </div>
                        <div className="section-text pos-rel">
                           <h5>Testimonials</h5>
                           <h1>Our Happy Clients Says About Us.</h1>
                        </div>
                        <div className="section-line pos-rel">
                           <img src="img/shape/section-title-line.png" alt=""/>
                        </div>
                     </div>
                  </div>
               </div>


               <Slider className='testimonials-activation' {...settings}>

                     <HomeTwoSingleTestimonial image="1" />
                     <HomeTwoSingleTestimonial image="2" />
                     <HomeTwoSingleTestimonial image="1" />

                  </Slider>

            </div>
         </div>
      </>
   );
};

export default HomeTwoTestimonials;