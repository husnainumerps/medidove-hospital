import React from 'react';
import HomeTwoSingleService from '../../../components/HomeTwoSingleService/HomeTwoSingleService';

const HomeTwoServicesArea = () => {
   return (
      <>
         <section className="servcies-area gray-bg pt-100 pb-90">
            <div className="container">
               <div className="row">
                  <div className="col-xl-4 offset-xl-4 col-lg-10 offset-lg-1">
                     <div className="section-title text-center pos-rel mb-75">
                        <div className="section-icon">
                           <img className="section-back-icon" src="img/section/section-back-icon.png" alt=""/>
                        </div>
                        <div className="section-text pos-rel">
                           <h5>Services</h5>
                           <h1>What We Do For You?</h1>
                        </div>
                        <div className="section-line pos-rel">
                           <img src="img/shape/section-title-line.png" alt=""/>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="row">

                  <HomeTwoSingleService icon="1" number="1" title="Medical Home Care" />
                  <HomeTwoSingleService icon="2" number="2" title="Medical Eye Point" />
                  <HomeTwoSingleService icon="3" number="3" title="Medical Older Care" />
                  <HomeTwoSingleService icon="4" number="4" title="Medical Dental Care" />

               </div>
            </div>
         </section>
      </>
   );
};

export default HomeTwoServicesArea;