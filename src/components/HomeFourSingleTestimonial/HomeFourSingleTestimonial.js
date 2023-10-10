import React from 'react';

const HomeFourSingleTestimonial = ({image,name}) => {
   return (
      <>
         <div className="col-md-6">
            <div className="h4testimonials-wrapper white-bg pos-rel">
               <span className="h4testi-iconquato"><i className="fal fa-quote-right"></i></span>
               <div className="h4testimonials-ratings">
                  <ul className="list-inline">
                     <li><i className="fas fa-star"></i></li>
                     <li><i className="fas fa-star"></i></li>
                     <li><i className="fas fa-star"></i></li>
                     <li><i className="fas fa-star"></i></li>
                     <li><i className="fas fa-star"></i></li>
                  </ul>
               </div>
               <div className="h4testimonials-content mb-20">
                  <p>Lorem ipsum dolor sit amet, coning
                     ctetur adipisicing elit, sed do it on
                     eiusmod tempor incididunt me
                     ut labore et dolore.</p>
               </div>
               <div className="h4testimonials-author d-flex align-items-center">
                  <div className="h4testimonials--author__icon">
                     <img src={`img/home4/testimonials/author-icon${image}.png`} alt="" />
                  </div>
                  <div className="h4testimonials--author__info">
                     <h5 className="f-600 theme-color">{name}</h5>
                     <span className="f-500 pink-color">Founder, TrashTheme</span>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeFourSingleTestimonial;