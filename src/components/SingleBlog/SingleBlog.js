import React from 'react';
import { Link } from 'react-router-dom';

const SingleBlog = ({image}) => {
    return (
        <>
            <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="latest-news-box latest-news-box-2 mb-30">
                    <div className="latest-news-thumb">
                        <Link to="/blogDetails"><img src={`img/blog/news-thumb-${image}.jpg`} alt=""/></Link>
                    </div>
                    <div className="latest-news-content-box">
                        <div className="latest-news-content">
                            <div className="news-meta mb-10">
                                <span><Link to="/blogDetails" className="news-tag">Medical,</Link></span>
                                <span><Link to="/blogDetails" className="news-tag">Medicine</Link></span>
                            </div>
                            <h3><Link to="/blogDetails">Lorem ipsum dolor sit met, cons ectetur.</Link></h3>
                            <p>Lorem ipsum dolor sit amet, consectet adipisicing elit, sed do eiusmod tem incididunt ut labore et dolore.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleBlog;