import React from 'react';
import { Link } from 'react-router-dom';

const HomeFact = () => {
   return (
      <>
         <section className="fact-area fact-map primary-bg pos-rel pt-115 pb-60">
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-10">
                     <div className="section-title pos-rel mb-45">
                        <div className="section-text section-text-white pos-rel">
                           <h5>We are available 24/7</h5>
                           <h1 className="white-color">We Always Ready For A Challenge.</h1>
                        </div>
                     </div>
                     <div className="section-button section-button-left mb-30">
                        <Link to="/contact" className="primary_btn btn-icon ml-0"><span>+</span>Make Appointment</Link>
                     </div>
                  </div>
                  <div className="col-lg-6 col-lg-6 col-md-8">
                     <div className="cta-satisfied">
                        <div className="single-satisfied mb-50">
                           <h1>1M+</h1>
                           <h5> <i className="fas fa-user"></i> Satisfied Patients</h5>
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                              aliqua.</p>
                        </div>
                        <div className="single-satisfied mb-50">
                           <h1>100+</h1>
                           <h5><i className="far fa-thumbs-up"></i> World Awards</h5>
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                              aliqua.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeFact;