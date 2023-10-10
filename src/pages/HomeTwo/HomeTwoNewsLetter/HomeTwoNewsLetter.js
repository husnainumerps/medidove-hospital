import React from 'react';

const HomeTwoNewsLetter = () => {
   return (
      <>
         <section className="news-letter-area pt-120 pb-120" data-background="img/newsletter/news-letter-bg.jpg">
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 offset-xl-6 col-lg-8 offset-lg-4">
                     <div className="news-letter-box">
                        <div className="about-title news-letter-title mb-20">
                           <h5 className="pink-color">Subscribe For Get Update</h5>
                           <h1>Let’s Find An Office Near You.</h1>
                        </div>
                        <div className="news-letter-text mb-30">
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor incididunt ut labore et dolore magna
                              aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                        </div>
                        <div className="subscribe-form">
                           <form action="#">
                              <input type="text" placeholder="Enter your email address" />
                              <button className="primary_btn" type="submit">Subscribe</button>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeTwoNewsLetter;