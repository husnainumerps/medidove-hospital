import React from 'react';
import BlogDetailsLeftSide from '../../../components/BlogDetailsLeftSide/BlogDetailsLeftSide';
import BlogDetailsRightSide from '../../../components/BlogDetailsRightSide/BlogDetailsRightSide';

const DetailsLeftSideBarArea = () => {
    return (
        <>
            <section className="blog-area pt-120 pb-80">
                <div className="container">
                    <div className="row">

                        <BlogDetailsRightSide />

                        <BlogDetailsLeftSide details_topBar={<div className="postbox__thumb mb-35">
                            <img src="img/blog/b2.jpg" alt="blog img" />
                        </div>} />

                    </div>
                </div>
            </section>
        </>
    );
};

export default DetailsLeftSideBarArea;