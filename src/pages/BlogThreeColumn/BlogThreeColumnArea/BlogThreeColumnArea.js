import React from 'react';
import BlogPaginationActiveTwo from '../../../components/blogPaginationActiveTwo/BlogPaginationActiveTwo';
import BlogSmSingleColumn from '../../../components/BlogTwoSingleColumn/BlogSmSingleColumn';

const BlogThreeColumnArea = () => {
   return (
      <>
         <section className="blog-area pt-100 pb-60">
            <div className="container">
               <div className="row">

                  <BlogSmSingleColumn image="1" column="4" />
                  <BlogSmSingleColumn image="2" column="4" />
                  <BlogSmSingleColumn image="3" column="4" />
                  <BlogSmSingleColumn image="4" column="4" />
                  <BlogSmSingleColumn image="5" column="4" />
                  <BlogSmSingleColumn image="6" column="4" />

               </div>

               <BlogPaginationActiveTwo/>

            </div>
         </section>
      </>
   );
};

export default BlogThreeColumnArea;