import React from 'react';
import { Link } from 'react-router-dom';
import HomeTwoSingleAbout from '../../../components/HomeTwoSingleAbout/HomeTwoSingleAbout';

const HomeTwoAbout = () => {
   return (
      <>
         <section className="about-area about-area-mid pt-120 pb-90">
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 col-lg-12 col-md-12">
                     <div className="row">

                        <HomeTwoSingleAbout icon="1" title="Advanced Care" spacing="b-40" />
                        <HomeTwoSingleAbout icon="2" title="Respite Care" spacing="t-40" />
                        <HomeTwoSingleAbout icon="3" title="Daily Care" spacing="b-30" />
                        <HomeTwoSingleAbout icon="4" title="Neuorology Care" spacing="t-40 mb-30" />

                     </div>
                  </div>

                  <div className="col-xl-6 col-lg-12 col-md-11">
                     <div className="about-right-side pt-25 mb-30">
                        <div className="about-title mb-20">
                           <h5 className="pink-color">About Us</h5>
                           <h1>Short Story About MediDove Clinic.</h1>
                        </div>
                        <div className="about-text">
                           <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                              irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                              cupidatat non proident, sunt in culpa qui officia.</p><br/>
                        </div>
                        <div className="about-text-list mb-40">
                           <ul>
                              <li><i className="fa fa-check"></i><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.</span></li>
                              <li><i className="fa fa-check"></i><span>Eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
                              <li><i className="fa fa-check"></i><span>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea co.</span></li>
                           </ul>
                        </div>
                        <div className="button-area">
                           <Link to="/about" className="primary_btn btn-icon ml-0"><span>+</span>learn more</Link>
                        </div>
                     </div>
                  </div>

               </div>
            </div>
         </section>
      </>
   );
};

export default HomeTwoAbout;