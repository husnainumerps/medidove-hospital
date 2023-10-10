import React from 'react';
import BlogLgSingleColumn from '../../../components/BlogLgSingleColumn/BlogLgSingleColumn';
import BlogSmSingleColumn from '../../../components/BlogTwoSingleColumn/BlogSmSingleColumn';
import Masonry from 'react-masonry-css';
import BlogPaginationActiveTwo from '../../../components/blogPaginationActiveTwo/BlogPaginationActiveTwo';

const BlogTwoColumnMasonryArea = () => {
   const breakpointColumns = {
      default: 2,
      1100: 2,
      768: 1,
   };

   return (
      <>
         <section className="blog-area pt-120 pb-120">
            <div className="container">

                  <Masonry
                     breakpointCols={breakpointColumns}
                     className="my-masonry-grid"
                     columnClassName="my-masonry-grid_column"

                  >
                     <BlogSmSingleColumn image="10" masonry={true}  />
                     <BlogLgSingleColumn image="4"  masonry={true} />
                     <BlogLgSingleColumn image="3"  masonry={true} />
                     <BlogSmSingleColumn image="8"  masonry={true} />
                     <BlogSmSingleColumn image="1"  masonry={true} />
                     <BlogSmSingleColumn image="6"  masonry={true} />
                  </Masonry>


              <BlogPaginationActiveTwo/>

            </div>
         </section>
      </>
   );
};

export default BlogTwoColumnMasonryArea;