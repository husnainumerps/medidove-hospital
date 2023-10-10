import React from 'react';
import HomeThreeSinglePricing from '../../../components/HomeThreeSinglePricing/HomeThreeSinglePricing';

const HomeThreePricing = () => {
   return (
      <>
         <section id="pricing" className="pricing-area theme-bg pos-rel pt-140 pb-60">
            <div className="container">
               <div className="row">
                  <div className="col-xl-8 col-lg-7 col-md-12">
                     <div className="section-title section-title-m-0 pos-rel mb-75">
                        <div className="section-icon">
                           <img className="section-back-icon back-icon-left" src="img/section/section-back-icon-blue.png" alt=""/>
                        </div>
                        <div className="section-text pos-rel">
                           <h5>Our Plans</h5>
                           <h1 className="white-color">Pricing & Plans</h1>
                        </div>
                        <div className="section-line pos-rel">
                           <img src="img/shape/section-title-line.png" alt=""/>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-4 col-lg-5 col-md-12">
                     <nav className="pricing-nav mb-70">
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                           <a className="nav-item nav-link active" id="nav-home-tab" data-bs-toggle="tab" href="#nav-home"
                              role="tab" aria-controls="nav-home" aria-selected="true">Monthly</a>
                           <a className="nav-item nav-link" id="nav-profile-tab" data-bs-toggle="tab" href="#nav-profile"
                              role="tab" aria-controls="nav-profile" aria-selected="false">Yearly</a>
                        </div>
                     </nav>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xl-12">
                     <div className="pricing-tab wow fadeInUp mb-30" data-wow-delay="0.3s">
                        <div className="tab-content" id="nav-tabContent">
                           <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                              <div className="row">

                                 <HomeThreeSinglePricing title="Basic Plan" price="57.89" conditionOne={true}  />
                                 <HomeThreeSinglePricing title="Advance Plan" price="88.90" pink_bg="pink-bg white-color" green_bg_color="green-bg white-color" conditionTwo={true} />
                                 <HomeThreeSinglePricing title="Team Plan" price="350.89" conditionThree={true} />

                              </div>
                           </div>
                           <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                              <div className="row">
                                 <HomeThreeSinglePricing title="Basic Plan" price="75.89" conditionOne={true} />
                                 <HomeThreeSinglePricing title="Advance Plan" price="95.90" pink_bg="pink-bg white-color" green_bg_color="green-bg white-color" conditionTwo={true} />
                                 <HomeThreeSinglePricing title="Team Plan" price="450.89" conditionThree={true} />
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

export default HomeThreePricing;