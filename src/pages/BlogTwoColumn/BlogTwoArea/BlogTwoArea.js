import React from 'react';
import BlogPaginationActiveTwo from '../../../components/blogPaginationActiveTwo/BlogPaginationActiveTwo';
import BlogSmSingleColumn from '../../../components/BlogTwoSingleColumn/BlogSmSingleColumn';

const BlogTwoArea = () => {
    return (
        <>
            <section className="blog-area pt-120 pb-120">
                <div className="container">
                    <div className="row">

                        <BlogSmSingleColumn image="1" column="6" />
                        <BlogSmSingleColumn image="9" column="6" />
                        <BlogSmSingleColumn image="8" column="6" />
                        <BlogSmSingleColumn image="7" column="6" />
                        <BlogSmSingleColumn image="6" column="6" />
                        <BlogSmSingleColumn image="5" column="6" />


                    </div>

                    <BlogPaginationActiveTwo/>

                </div>
            </section>
        </>
    );
};

export default BlogTwoArea;