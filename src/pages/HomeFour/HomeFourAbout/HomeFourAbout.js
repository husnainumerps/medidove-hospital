import React from 'react';

const HomeFourAbout = () => {
   return (
      <>
         <section className="about-area pt-130 pb-100">
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 col-lg-5">
                     <div className="h4about-thumb pos-rel">
                        <img src="img/home4/about/about__thumb.jpg" alt="" />
                        <a href="#" className="call-btn f-700 white-color green-bg">
                           <i className="call-icon"><img src="img/home4/icon/about__phone__icon.png" alt="" />
                           </i><span>Call : 012 (963) 15632</span></a>
                        <img src="img/home4/about/overlap.png" alt="" className="about-overlap__thumb" /> </div>
                  </div>
                  <div className="col-xl-6 col-lg-7">
                     <div className="about-right-side h4about-right mb-30">
                        <div className="about-title mb-20">
                           <h5 className="pink-color">About Medidove</h5>
                           <h1>25+ Years We Provide Services</h1>
                        </div>
                        <div className="about-text">
                           <p className="theme-color">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod temponcididunt ut labore dolore magna aliqua. Ut enim ad minimveniam, quis nos exercitation ullamco laboris nisi ut aliquip</p>
                           <p className="mb-20">At vero eos et accusamus et iusto odio dignissimos ducimus qui bladitiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                        </div>
                        <div className="about-author d-flex align-items-center">
                           <div className="author-ava h4author-ava">
                              <img src="img/home4/about/ava.png" alt="" />
                           </div>
                           <div className="author-desination h4author-destination">
                              <p>Consectetur adipisicing elit, sed do eiusmod temponc ididunt ut labore dolore magna aliqua.</p>
                              <h4 className="mb-0">Annie J. Fisher</h4>
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

export default HomeFourAbout;