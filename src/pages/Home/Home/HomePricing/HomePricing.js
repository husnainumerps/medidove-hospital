import React from 'react';
import HomeSinglePrice from '../../../../components/HomeSinglePrice/HomeSinglePrice';

const HomePricing = () => {
   return (
      <>
         <section className="pricing-area gray-bg pt-115 pb-90">
            <div className="container">
               <div className="row">
                  <div className="col-xl-5 col-lg-6 col-md-12">
                     <div className="section-title pos-rel mb-75">
                        <div className="section-icon">
                           <img className="section-back-icon back-icon-left" src="img/section/section-back-icon.png" alt=""/>
                        </div>
                        <div className="section-text pos-rel">
                           <h5>Our Plans</h5>
                           <h1>Pricing &amp; Plans</h1>
                        </div>
                        <div className="section-line pos-rel">
                           <img src="img/shape/section-title-line.png" alt=""/>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-7 col-lg-6 col-md-12">
                     <div className="pricing-menu f-right">
                        <ul className="nav nav-pills" id="pills-tab" role="tablist">
                           <li className="nav-item">
                              <button className="nav-link active" id="pills-home-tab" data-bs-toggle="tab" data-bs-target="#pills-home" data-toggle="pill" role="tab" aria-controls="pills-home" aria-selected="true">monthly</button>
                           </li>
                           <li className="nav-item">
                              <button className="nav-link" id="pills-profile-tab" data-bs-toggle="tab" data-toggle="pill"
                                 data-bs-target="#pills-profile"  role="tab" aria-controls="pills-profile"
                                 aria-selected="false">yearly</button>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>

               <div className="row">
                  <div className="col-xl-12">
                     <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                           <div className="row">

                              <HomeSinglePrice image="1" title="Professional" price="425.00" />
                              <HomeSinglePrice image="2" title="Advanced" price="455.00" />
                              <HomeSinglePrice image="3" title="Advantage" price="489.00" />

                           </div>
                        </div>
                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                           <div className="row">
                              <HomeSinglePrice image="2" title="Professional" price="489.00" />
                              <HomeSinglePrice image="1" title="Advanced" price="530.00" />
                              <HomeSinglePrice image="3" title="Advantage" price="580.00" />
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

export default HomePricing;