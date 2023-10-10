import React from 'react';

const CommonSectionArea = ({area_header}) => {
   return (
      <>
         <section className="about-area pt-120 pb-90">
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 col-lg-5">
                     {area_header}
                  </div>
                  <div className="col-xl-6 col-lg-7">
                     <div className="about-right-side pt-55 mb-30">
                        <div className="about-title mb-20">
                           <h5>About Us</h5>
                           <h1>Short Story About MediDove Clinic.</h1>
                        </div>
                        <div className="about-text mb-50">
                           <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                              irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                              cupidatat non proident, sunt in culpa qui officia.</p>
                        </div>
                        <div className="our-destination">
                           <div className="single-item mb-30">
                              <div className="mv-icon f-left">
                                 <img src="img/about/destination-icon-1.png" alt=""/>
                              </div>
                              <div className="mv-title fix">
                                 <h3>Our Mission</h3>
                                 <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse.</p>
                              </div>
                           </div>
                           <div className="single-item">
                              <div className="mv-icon f-left">
                                 <img src="img/about/destination-icon-2.png" alt=""/>
                              </div>
                              <div className="mv-title fix">
                                 <h3>Our Vission</h3>
                                 <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse.</p>
                              </div>
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

export default CommonSectionArea;