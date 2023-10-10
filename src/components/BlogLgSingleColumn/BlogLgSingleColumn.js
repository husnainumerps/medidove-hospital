import React from 'react';
import { Link } from 'react-router-dom';

const BlogLgSingleColumn = ({ image, masonry}) => {
    return (
        <>
            <div className={masonry ? "" : "col-lg-6 col-md-6 grid-item"}>
                <article className="postbox post format-image mb-40">
                    <div className="postbox__thumb">
                        <Link to="/blogDetails">
                            <img src={`img/blog/ms${image}.jpg`} alt="blog img"/>
                        </Link>

                    </div>
                    <div className="postbox__text p-30">
                        <div className="post-meta mb-15">
                            <span><Link to="/blogDetails"><i className="far fa-user"></i> Diboli </Link></span>
                            <span><Link to="/blogDetails"><i className="far fa-comments"></i> 23 Comments</Link></span>
                        </div>
                        <h3 className="blog-title blog-title-sm">
                            <Link to="/blogDetails">Lorem ipsum dolor sit amet, consectetur adipisic elit, sed do eiusmod tempor
                                incididunt
                                .</Link>
                        </h3>
                        <div className="post-text">
                            <p>There’s a good chance Everyday Health is the most appropriately named blog on this list because it focuses on the
                                health
                                topics that consistently affect a wide range of people. They also get kudos.</p>
                        </div>
                        <div className="read-more">
                            <Link to="/blogDetails" className="read-more">read more <i className="fas fa-long-arrow-alt-right"></i></Link>
                        </div>
                    </div>
                </article>
            </div>
        </>
    );
};

export default BlogLgSingleColumn;