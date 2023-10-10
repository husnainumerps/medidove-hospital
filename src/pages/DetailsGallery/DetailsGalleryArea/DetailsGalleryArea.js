import React from 'react';
import BlogDetailsLeftSide from '../../../components/BlogDetailsLeftSide/BlogDetailsLeftSide';
import BlogDetailsRightSide from '../../../components/BlogDetailsRightSide/BlogDetailsRightSide';
import BlogThirdArticle from '../../Blogs/BlogsArea/BlogThirdArticle';

const DetailsGalleryArea = () => {
    return (
        <>
            <section className="blog-area pt-120 pb-80">
                <div className="container">
                    <div className="row">

                        <BlogDetailsLeftSide details_topBar={<BlogThirdArticle/>} />

                        <BlogDetailsRightSide />

                    </div>
                </div>
            </section>
        </>
    );
};

export default DetailsGalleryArea;