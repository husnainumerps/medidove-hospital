import React from 'react';
import SingleCount from '../../../components/SingleCount/SingleCount';

const HomeThreeAboutArea = () => {
   return (
      <>
         <section className="about-area pt-115 pb-80">
            <div className="container">
               <div className="row align-items-center separator pb-110">
                  <div className="col-xl-6 col-lg-6">
                     <div className="medical-icon-brand pos-rel f-left">
                        <img src="img/about/medi-brand.png" alt=""/>
                     </div>
                     <div className="about-title mb-20 fix">
                        <h1 className="mb-40">25+ Years Of Experience</h1>
                        <h5 className="pink-color m-0">MediDove help increase your readers.</h5>
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-6">
                     <div className="about-right-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                           incididunt ut labo re et dolore magna aliqua. Ut enim ad minim veniam, quis nos
                           trud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                           aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                           nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                           qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde
                           omnis iste natus error sit voluptatem accusantium</p>
                     </div>
                  </div>
               </div>
               <div className="row pt-120">

                  <SingleCount icon="7" counter="540" title="Expert Doctors" />
                  <SingleCount icon="83" counter="899" title="Problem Solve" />
                  <SingleCount icon="9" counter="100" title="Award Winner" />

               </div>
            </div>
         </section>
      </>
   );
};

export default HomeThreeAboutArea;