import React from 'react';
import { Link } from 'react-router-dom';
import HomeThreeSingleBlog from '../../../components/HomeThreeSingleBlog/HomeThreeSingleBlog';

const HomeThreeBlogs = () => {
   return (
      <>
         <section className="latest-news-area gray-bg pt-115 pb-90">
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 col-lg-7">
                     <div className="section-title pos-rel mb-75">
                        <div className="section-icon">
                           <img className="section-back-icon back-icon-left" src="img/section/section-back-icon.png" alt=""/>
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
                  <div className="col-xl-6 col-lg-5 d-none d-lg-block">
                     <div className="section-button text-end pt-80">
                        <Link to="/blogs"
                        className="primary_btn btn-icon ml-0"><span>+</span>our blog</Link>
                     </div>
                  </div>
               </div>
               <div className="row">

                  <HomeThreeSingleBlog image="4" />
                  <HomeThreeSingleBlog image="5" />
                  <HomeThreeSingleBlog image="6" />

               </div>
            </div>
         </section>
      </>
   );
};

export default HomeThreeBlogs;