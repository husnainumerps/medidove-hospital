import React from 'react';
import Masonry from 'react-masonry-css';
import BlogLgSingleColumn from '../../../components/BlogLgSingleColumn/BlogLgSingleColumn';
import BlogPaginationActiveTwo from '../../../components/blogPaginationActiveTwo/BlogPaginationActiveTwo';
import BlogSmSingleColumn from '../../../components/BlogTwoSingleColumn/BlogSmSingleColumn';

const BlogThreeColMasonryArea = () => {
    const breakpointColumns = {
        default: 3,
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
                        <BlogSmSingleColumn image="1" masonry={true} />
                        <BlogLgSingleColumn image="1" masonry={true} />
                        <BlogSmSingleColumn image="3" masonry={true} />
                        <BlogLgSingleColumn image="2" masonry={true} />
                        <BlogSmSingleColumn image="1" masonry={true} />
                        <BlogLgSingleColumn image="3" masonry={true} />
                    </Masonry>


                    <BlogPaginationActiveTwo />

                </div>
            </section>
        </>
    );
};

export default BlogThreeColMasonryArea;