import React from 'react';
import { Link } from 'react-router-dom';
import HomeSingleBlogLeftSide from '../../../../components/HomeSingleBlogLeftSide/HomeSingleBlogLeftSide';
import HomeSingleBlogRightSide from '../../../../components/HomeSingleBlogRightSide/HomeSingleBlogRightSide';

const HomeBlogs = () => {
   return (
      <>
         <section className="latest-news-area pt-115 pb-20">
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 col-lg-7">
                     <div className="section-title pos-rel mb-75">
                        <div className="section-icon">
                           <img className="section-back-icon back-icon-left" src="img/section/section-back-icon.png" alt="" />
                        </div>
                        <div className="section-text pos-rel">
                           <h5>News</h5>
                           <h1>Get Every Single Updates Here.</h1>
                        </div>
                        <div className="section-line pos-rel">
                           <img src="img/shape/section-title-line.png" alt="" />
                        </div>
                     </div>
                  </div>

                  <div className="col-xl-6 col-lg-5 d-none d-lg-block">
                     <div className="section-button home_blog_btn text-end pt-80">
                        <Link to="/blogs" className="primary_btn btn-icon ml-0">
                           <span>+</span>our blog</Link>
                     </div>
                  </div>
               </div>

               <div className="row">

                  <HomeSingleBlogLeftSide image="1" />
                  <HomeSingleBlogLeftSide image="2" />

                  <div className="col-xl-4 col-lg-12 col-md-12">
                     <div className="recent-news-list mb-120">

                        <HomeSingleBlogRightSide />
                        <HomeSingleBlogRightSide />
                        <HomeSingleBlogRightSide border="border-0" />

                     </div>
                     <div className="mk-call-btn f-right mb-30">
                        <Link to="/contact" className="primary_btn btn-icon btn-icon-green ml-0">
                           <span><i className="fas fa-phone"></i></span>make call</Link>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeBlogs;