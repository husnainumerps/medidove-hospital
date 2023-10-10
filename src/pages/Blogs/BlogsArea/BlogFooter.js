import React from 'react';

const BlogFooter = () => {
    return (
        <>
            <article className="postbox post format-quote mb-40">
                <div className="post-text">
                    <blockquote>
                        <p>This health blog from NPR takes a fairly broad look at the medical world,.</p>
                        <footer>- Rosalina Pong</footer>
                    </blockquote>
                </div>
            </article>
            <div className="basic-pagination basic-pagination-2 mb-40">
                <ul>
                    <li><a href="#"><i className="fas fa-angle-double-left"></i></a></li>
                    <li><a href="#">01</a></li>
                    <li><a href="#">02</a></li>
                    <li><a href="#">03</a></li>
                    <li><a href="#"><i className="fas fa-ellipsis-h"></i></a></li>
                    <li><a href="#"><i className="fas fa-angle-double-right"></i></a></li>
                </ul>
            </div>
        </>
    );
};

export default BlogFooter;