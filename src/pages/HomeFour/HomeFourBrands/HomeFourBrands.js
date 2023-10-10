import React from 'react';
import BrandLogo from '../../../components/BrandLogo/BrandLogo';
import Slider from "react-slick";

const HomeFourBrands = () => {
   // settings
   const settings = {
      autoplay: false,
      autoplaySpeed: 10000,
      dots: false,
      arrows: false,
      slidesToShow: 5,
      slidesToScroll: 5,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 4,
               slidesToScroll: 4,
               infinite: true,
            }
         },
         {
            breakpoint: 767,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 3,
               arrows: false
            }
         },
         {
            breakpoint: 576,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
               arrows: false
            }
         },
      ]

   };
   return (
      <>
         <section className="h4brand-area pos-rel pb-130">
            <div className="container">
               <div className="row">
                  <Slider className='brand-active' {...settings}>

                     <BrandLogo imagePath="home4/sponsors/sp1" />
                     <BrandLogo imagePath="home4/sponsors/sp2" />
                     <BrandLogo imagePath="home4/sponsors/sp3" />
                     <BrandLogo imagePath="home4/sponsors/sp4" />
                     <BrandLogo imagePath="home4/sponsors/sp5" />
                     <BrandLogo imagePath="home4/sponsors/sp6" />
                     <BrandLogo imagePath="home4/sponsors/sp2" />

               </Slider>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeFourBrands;