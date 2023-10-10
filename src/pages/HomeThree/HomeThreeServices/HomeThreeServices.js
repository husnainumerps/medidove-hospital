import React from 'react';
import { Link } from 'react-router-dom';
import ServicesTwoSingleItem from '../../../components/ServicesTwoSingleItem/ServicesTwoSingleItem';

const HomeThreeServices = () => {
   return (
      <>
         <section className="servcies-area gray-bg pt-115 pb-35">
            <div className="container">
               <div className="row">
                  <div className="col-xl-7 col-lg-8 col-md-12">
                     <div className="section-title pos-rel mb-75">
                        <div className="section-icon">
                           <img className="section-back-icon back-icon-left" src="img/section/section-back-icon.png" alt=""/>
                        </div>
                        <div className="section-text pos-rel">
                           <h5>Departments</h5>
                           <h1>Managed Your Heathcare Services</h1>
                        </div>
                        <div className="section-line pos-rel">
                           <img src="img/shape/section-title-line.png" alt=""/>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-5 col-lg-4">
                     <div className="section-button text-end d-none d-lg-block pt-80">
                        <Link to="/services" className="primary_btn btn-icon ml-0"><span>+</span>more services</Link>
                     </div>
                  </div>
               </div>

               <div className="row">
                  <ServicesTwoSingleItem image="1" title="Body Surgery" />
                  <ServicesTwoSingleItem image="2" title="Neurology Sargery"/>
                  <ServicesTwoSingleItem image="3" title="Blood Cancer" />
               </div>

            </div>
         </section>
      </>
   );
};

export default HomeThreeServices;