import React from 'react';
import { Link } from 'react-router-dom';

const HomeThreeFactArea = () => {
   return (
      <>
         <section className="fact-area fact-map green-bg pos-rel pt-115 pb-60">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-xl-9 col-lg-8 col-md-12">
                     <div className="section-title pos-rel mb-45">
                        <div className="section-text section-text-white pos-rel">
                           <h5 className="white-color">Health Care Services</h5>
                           <h1 className="white-color">Don’t Hesitate, Contact Us For Better Help & Services.</h1>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-3 col-lg-4">
                     <div className="section-button section-button-left mb-30">
                        <Link to="/contact"
                        className="primary_btn btn-icon btn-icon-dark ml-0"><span>+</span>Make Appointment</Link>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeThreeFactArea;