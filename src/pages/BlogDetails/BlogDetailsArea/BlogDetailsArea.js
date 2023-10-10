import React from 'react';
import BlogDetailsLeftSide from '../../../components/BlogDetailsLeftSide/BlogDetailsLeftSide';
import BlogDetailsRightSide from '../../../components/BlogDetailsRightSide/BlogDetailsRightSide';

const BlogDetailsArea = () => {
   return (
      <>
         <section className="blog-area pt-120 pb-80">
            <div className="container">
               <div className="row">

                  <BlogDetailsLeftSide details_topBar={<div className="postbox__thumb mb-35">
                     <img src="img/blog/b2.jpg" alt="blog img" />
                  </div>} />

                  <BlogDetailsRightSide/>

               </div>
            </div>
         </section>
      </>
   );
};

export default BlogDetailsArea;