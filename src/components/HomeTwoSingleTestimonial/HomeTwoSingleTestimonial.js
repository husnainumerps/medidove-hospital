import React from 'react';

const HomeTwoSingleTestimonial = ({image}) => {
   return (
      <>
         <div className="col-xl-12 home_two_testimonial_wrapper">
            <div className="testi-box-2">
               <div className="test-rating-inner d-flex justify-content-between mb-30 align-items-center pr-15">
                  <div className="testi-quato-icon testi-quato-icon-green m-0">
                     <img src="img/testimonials/testi-quato-icon.png" alt=""/>
                  </div>
                  <div className="testi-rating-list">
                     <ul>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                     </ul>
                  </div>
               </div>
               <div className="testi-content-2">
                  <h3>Lorem ipsum dolor sit amet, consectetur adipil sicing elit, sed do eiusmod tempor.</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                     aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
               </div>
               <div className="testi-author d-flex align-items-center mt-30">
                  <div className="testi-author-icon-2">
                     <img src={`img/icon/tesit-author-icon-${image}.png`} alt=""/>
                  </div>
                  <div className="testi-author-desination-2">
                     <h4>Rosalina D. Williamson</h4>
                     <span>Founder At <span className="f-500 green-color">MinimalDesign</span></span>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeTwoSingleTestimonial;