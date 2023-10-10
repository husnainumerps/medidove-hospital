import React from 'react';
import BlogFirstArticle from '../../Blogs/BlogsArea/BlogFirstArticle';
import BlogFooter from '../../Blogs/BlogsArea/BlogFooter';
import BlogFourthArticle from '../../Blogs/BlogsArea/BlogFourthArticle';
import BlogRightSide from '../../Blogs/BlogsArea/BlogRightSide';
import BlogSecondArticle from '../../Blogs/BlogsArea/BlogSecondArticle';
import BlogThirdArticle from '../../Blogs/BlogsArea/BlogThirdArticle';

const BlogLeftSideBarArea = () => {
   return (
      <>
         <section className="blog-area pt-120 pb-80">
            <div className="container">
               <div className="row">

                  <BlogRightSide />

                  <div className="col-lg-8">

                     <BlogFirstArticle />

                     <BlogSecondArticle />

                     <BlogThirdArticle />

                     <BlogFourthArticle />

                     <BlogFooter />
                  </div>

               </div>
            </div>
         </section>
      </>
   );
};

export default BlogLeftSideBarArea;