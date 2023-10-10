import React from 'react';
import AboutSingleAnalysis from '../../../components/AboutSingleAnalysis/AboutSingleAnalysis';

const AboutAnalysis = () => {
   return (
      <>
         <section className="analysis-area pos-rel theme-bg pb-90">
            <div className="analysis-bg-icon">
               <img src="img/analysis/analysis-bg-icon.png" alt="" />
            </div>
            <div className="container">
               <div className="row">
                  <div className="col-xl-12">
                     <ul className="nav nav-pills mb-65" id="pills-tab" role="tablist">
                        <li className="nav-item">
                           <a className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" href="#pills-home" role="tab"
                              aria-controls="pills-home" aria-selected="true">
                              <img src="img/analysis/search-icon.png" alt="" />
                              <h6>Industry analysis</h6>
                           </a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" href="#pills-profile" role="tab"
                              aria-controls="pills-profile" aria-selected="false">
                              <img src="img/analysis/search-icon-2.png" alt="" />
                              <h6>Our comitment</h6>
                           </a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" href="#pills-contact" role="tab"
                              aria-controls="pills-contact" aria-selected="false">
                              <img src="img/analysis/search-icon-3.png" alt="" />
                              <h6>how we start care?</h6>
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xl-12">
                     <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                           <AboutSingleAnalysis />
                        </div>
                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                           <AboutSingleAnalysis />
                        </div>
                        <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                           <AboutSingleAnalysis />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default AboutAnalysis;