import React from 'react';

const HomeAboutArea = () => {
   return (
      <>
         <section className="about-area pt-120 pb-90">
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 col-lg-5 about_left">
                     <div className="medical-icon-brand-2">
                        <img src="img/about/medical-brand-icon-border.png" alt=""/>
                     </div>
                     <div className="about-left-side pos-rel mb-30">
                        <div className="about-front-img">
                           <img src="img/about/about-img.jpg" alt=""/>
                        </div>
                        <div className="about-shape">
                           <img src="img/about/about-shape.png" alt=""/>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-7">
                     <div className="about-right-side pt-55 mb-30">
                        <div className="about-title mb-20">
                           <h5>About Us</h5>
                           <h1>Short Story About MediDove Clinic.</h1>
                        </div>
                        <div className="about-text">
                           <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                              irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                              cupidatat non proident, sunt in culpa qui officia.</p>
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                              occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><br/>
                        </div>
                        <div className="about-author d-flex align-items-center">
                           <div className="author-ava">
                              <img src="img/about/author-ava.png" alt=""/>
                           </div>
                           <div className="author-desination">
                              <h4>Rosalina D. Williamson</h4>
                              <h6>founder</h6>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeAboutArea;