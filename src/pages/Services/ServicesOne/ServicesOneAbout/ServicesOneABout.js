import React from 'react';
import HomeSIngleService from '../../../../components/HomeSIngleService/HomeSIngleService';

const ServicesOneABout = () => {
    return (
        <>
          <section className="about-area pt-120 pb-90">
             <div className="container">
                <div className="row ">
                   <div className="col-xl-6 col-lg-6 col-md-12">
                      <div className="section-title section-title-m-0 pos-rel mb-50 text-end">
                         <div className="section-icon">
                            <img className="section-back-icon back-icon-right" src="img/section/section-back-icon.png" alt=""/>
                         </div>
                         <div className="section-text section-text-small pos-rel">
                            <h5>health care facility</h5>
                            <h1>Would you rather stay at home than go into a health care facility?</h1>
                         </div>
                      </div>
                   </div>
                   <div className="col-xl-6 col-lg-6 col-md-12">
                      <div className="facalty-text mb-50">
                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nost rud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                            qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde
                            omnis iste natus error sit voluptatem accusantium.</p>
                      </div>
                   </div>
                </div>
                <div className="row">
                   <HomeSIngleService icon="1" title="Body Surgery" border_className="service-box-border" />
                   <HomeSIngleService icon="2" title="Dental Care" border_className="service-box-border" />
                   <HomeSIngleService icon="3" title="service-content" border_className="service-box-border" />
                   <HomeSIngleService icon="4" title="Blood Cancer" border_className="service-box-border" />
                   <HomeSIngleService icon="5" title="Neurology Sargery" border_className="service-box-border" />
                   <HomeSIngleService icon="6" title="Allergic Issue" border_className="service-box-border" />
                </div>
             </div>
          </section>
        </>
    );
};

export default ServicesOneABout;