import React from 'react';
import HomeTwoSingleTeam from '../../../components/HomeTwoSingleTeam/HomeTwoSingleTeam';
import Slider from "react-slick";

const HomeTwoTeamArea = () => {
   const settings = {
      dots: true,
      infinite: false,
      speed: 300,
      arrows: false,
      slidesToShow: 6,
      slidesToScroll: 1,
      responsive: [
         {
            breakpoint: 1200,
            settings: {
               slidesToShow: 4,
               slidesToScroll: 1,
               infinite: true,
               dots: true
            }
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1
            }
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1
            }

         }
      ]

   };
   return (
      <>
         <section className="team-area pt-115 pb-75">
            <div className="container">
               <div className="row">
                  <div className="col-xl-12">
                     <div className="section-title text-center pos-rel mb-70">
                        <div className="section-icon">
                           <img className="section-back-icon" src="img/section/section-back-icon.png" alt=""/>
                        </div>
                        <div className="section-text pos-rel">
                           <h5>Angels</h5>
                           <h1>Our Doctors</h1>
                        </div>
                        <div className="section-line pos-rel">
                           <img src="img/shape/section-title-line.png" alt=""/>
                        </div>
                     </div>
                  </div>
               </div>
               {/* <div className="row team-activation"> */}

                  <Slider className='testimonials-activation team__area' {...settings}>

                     <HomeTwoSingleTeam image="1" />
                     <HomeTwoSingleTeam image="2" />
                     <HomeTwoSingleTeam image="3" />
                     <HomeTwoSingleTeam image="4" />
                     <HomeTwoSingleTeam image="5" />
                     <HomeTwoSingleTeam image="6" />
                     <HomeTwoSingleTeam image="3" />
                     <HomeTwoSingleTeam image="4" />

                  </Slider>

               {/* </div> */}
            </div>
         </section>
      </>
   );
};

export default HomeTwoTeamArea;