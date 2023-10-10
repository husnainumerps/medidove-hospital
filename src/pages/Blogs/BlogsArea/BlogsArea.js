import React from 'react';
import BlogFirstArticle from './BlogFirstArticle';
import BlogFooter from './BlogFooter';
import BlogFourthArticle from './BlogFourthArticle';
import BlogRightSide from './BlogRightSide';
import BlogSecondArticle from './BlogSecondArticle';
import BlogThirdArticle from './BlogThirdArticle';

const BlogsArea = () => {
   return (
      <>
         <section className="blog-area pt-120 pb-80">
            <div className="container">
               <div className="row">
                  <div className="col-lg-8">

                     <BlogFirstArticle />

                     <BlogSecondArticle />

                     <BlogThirdArticle />

                     <BlogFourthArticle />

                     <BlogFooter/>

                  </div>

                  <BlogRightSide />

               </div>
            </div>
         </section>
      </>
   );
};

export default BlogsArea;