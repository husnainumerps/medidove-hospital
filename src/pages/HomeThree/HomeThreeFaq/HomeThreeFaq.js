import React from 'react';
import HomeThreeSingleFaq from '../../../components/HomeThreeSingleFaq/HomeThreeSingleFaq';

const HomeThreeFaq = () => {
   return (
      <>
         <div className="section-faq-area pt-120 pb-100">
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 col-lg-4 d-lg-none d-xl-block">
                     <div className="faq-left-box pos-rel mb-200">
                        <div className="faq-left-img">
                           <img className="img" src="img/faq/faq-left-back.jpg" alt=""/>
                        </div>
                        <div className="faq-pos-front">
                           <img className="img" src="img/faq/faq-left-front.jpg" alt=""/>
                        </div>
                        <div className="faq-back-shape">
                           <img className="img" src="img/faq/faq-left-back-shape.png" alt=""/>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-12">
                     <div className="about-title mb-45">
                        <h5 className="pink-color">FAQ</h5>
                        <h1>Get Every Single Answers There.</h1>
                     </div>
                     <div className="faq-right-box">
                        <div id="accordion" className="mt-40">


                           <HomeThreeSingleFaq number="One" condition={true}  secondClassAdd="show" />
                           <HomeThreeSingleFaq number="Two" fistClassAdd="collapsed" />
                           <HomeThreeSingleFaq number="Three" fistClassAdd="collapsed" />
                           <HomeThreeSingleFaq number="Four" fistClassAdd="collapsed" />
                           <HomeThreeSingleFaq number="Five" fistClassAdd="collapsed" />

                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeThreeFaq;