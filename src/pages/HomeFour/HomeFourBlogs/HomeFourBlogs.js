import React from 'react';
import HomeFourSingleBlog from '../../../components/HomeFourSingleBlog/HomeFourSingleBlog';

const HomeFourBlogs = () => {
   return (
      <>
         <section className="latest-news-area pt-115 pb-100">
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
                     <div className="section-title text-center pos-rel mb-75">
                        <div className="section-icon">
                           <img className="section-back-icon" src="img/section/section-back-icon.png" alt=""/>
                        </div>
                        <div className="section-text pos-rel">
                           <h5>News</h5>
                           <h1>Get Every Single Updates Here.</h1>
                        </div>
                        <div className="section-line pos-rel">
                           <img src="img/shape/section-title-line.png" alt=""/>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row">

                  <HomeFourSingleBlog title="Working Together How Designers & Develop" date="22" />
                  <HomeFourSingleBlog title="Sharing Code Between Projects Lessons Learned" date="22" />
                  <HomeFourSingleBlog title="Working Together How Designers & Develop" date="22" />

               </div>
            </div>
         </section>
      </>
   );
};

export default HomeFourBlogs;