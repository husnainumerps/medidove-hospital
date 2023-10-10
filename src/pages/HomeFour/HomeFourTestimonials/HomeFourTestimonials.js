import React from 'react';
import HomeFourSingleTestimonial from '../../../components/HomeFourSingleTestimonial/HomeFourSingleTestimonial';

const HomeFourTestimonials = () => {
   return (
      <>
         <div className="testimonials pt-150 pb-80 h4_testimonials" data-background="img/home4/bg/testimonials-bg.jpg">
            <div className="container">
               <div className="row">
                  <div className="col-xl-7 offset-xl-5 h4testi-col">
                     <div className="row">

                        <HomeFourSingleTestimonial image="1" name='Hiliam D. Pawlu' />
                        <HomeFourSingleTestimonial image="2" name='Eric Z. Piedie' />
                        <HomeFourSingleTestimonial image="3" name='Hiliam D. Pawlu' />
                        <HomeFourSingleTestimonial image="1" name='Eric Z. Piedie' />

                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeFourTestimonials;