import React from 'react';
import BlogFirstArticle from '../../Blogs/BlogsArea/BlogFirstArticle';
import BlogFooter from '../../Blogs/BlogsArea/BlogFooter';
import BlogFourthArticle from '../../Blogs/BlogsArea/BlogFourthArticle';
import BlogSecondArticle from '../../Blogs/BlogsArea/BlogSecondArticle';
import BlogThirdArticle from '../../Blogs/BlogsArea/BlogThirdArticle';

const BlogNoSideBarArea = () => {
   return (
      <>
         <section className="blog-area pt-120 pb-80">
            <div className="container">
               <div className="row">
                  <div className="col-lg-8 offset-lg-2">

                     <BlogFirstArticle />

                     <BlogSecondArticle />

                     <BlogThirdArticle />

                     <BlogFourthArticle />

                     <BlogFooter/>

                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default BlogNoSideBarArea;