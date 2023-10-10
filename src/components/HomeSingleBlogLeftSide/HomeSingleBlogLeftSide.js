import React from 'react';
import { Link } from 'react-router-dom';

const HomeSingleBlogLeftSide = ({image}) => {
   return (
      <>
         <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="latest-news-box mb-30">
               <div className="latest-news-thumb mb-35">
                  <img src={`img/blog/blog-thumb-${image}.jpg`} alt=""/>
               </div>
               <div className="latest-news-content">
                  <div className="news-meta mb-10">
                     <span><Link to="/blogDetails" className="news-tag">Medical,</Link></span>
                     <span><Link to="/blogDetails" className="news-tag">Medicine</Link></span>
                  </div>
                  <h3><Link to="/blogDetails">Lorem ipsum dolor sit amet, cons ectetur adidis dicolo wiran.</Link></h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                     magna
                     aliqua. Ut enim ad minim veniam.</p>
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeSingleBlogLeftSide;