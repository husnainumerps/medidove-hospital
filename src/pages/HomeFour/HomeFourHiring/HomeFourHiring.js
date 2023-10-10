import React from 'react';
import HomeThreeHiring from '../../../components/HomeThreeHiring/HomeThreeHiring';

const HomeFourHiring = () => {
   return (
      <>
         <section className="hiring-area pos-rel h4_hiring_wrapper">
            <div className="hiring-bottom pos-rel">
               <div className="hire-right-img"></div>
               <div className="container-fulid pl-0 pr-0">
                  <div className="row g-0">
                     <div className="col-xl-6 col-lg-8">

                        <HomeThreeHiring btn_text="Apply Today" h4hireText="h4hire-text" title="Why Chose Us"
                        pinkColor="pink-color" />

                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeFourHiring;