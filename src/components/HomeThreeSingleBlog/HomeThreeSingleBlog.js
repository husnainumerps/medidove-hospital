import React from 'react';
import { Link } from 'react-router-dom';

const HomeThreeSingleBlog = ({image}) => {
    return (
        <>
            <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="latest-news-box latest-news-box-2 latest-news-box-3 mb-30">
                    <div className="latest-news-thumb">
                        <Link to="/blogDetails"><img src={`img/blog/news-thumb-${image}.jpg`} alt=""/></Link>
                    </div>
                    <div className="latest-news-content-box pl-0 pr-0">
                        <div className="latest-news-content">
                            <div className="news-meta mb-10">
                                <span><Link to="/blogDetails" className="news-tag">Medical,</Link></span>
                                <span><Link to="/blogDetails" className="news-tag">Medicine</Link></span>
                            </div>
                            <h3><Link to="/blogDetails">Lorem ipsum dolor sit at met, cons ectetur.</Link></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeThreeSingleBlog;