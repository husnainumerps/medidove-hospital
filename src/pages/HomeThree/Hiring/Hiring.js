import React from 'react';
import HomeThreeHiring from '../../../components/HomeThreeHiring/HomeThreeHiring';

const Hiring = () => {
   return (
      <>
         <section className="hiring-area pos-rel">
            <div className="hiring-top">
               <div className="hire-left-img"></div>
               <div className="container-fluid pe-0 ps-0">
                  <div className="row g-0">
                     <div className="col-xl-6 offset-xl-6 offset-lg-4">
                        <HomeThreeHiring btn_text="Apply Today" />
                     </div>
                  </div>
               </div>
            </div>
            <div className="hiring-bottom pos-rel">
               <div className="hire-right-img"></div>
               <div className="container-fulid pe-0 ps-0">
                  <div className="row g-0">
                     <div className="col-xl-6 col-lg-8">
                        <HomeThreeHiring btn_text="Contact us" />
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Hiring;