import React from 'react';
import { Link } from 'react-router-dom';

const HomeFourSingleBlog = ({title,date}) => {
    return (
        <>
            <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="h4latestnews-box pos-rel fix mb-30">
                    <div className="h4latestnews-bg"><img src="img/home4/news/blog__thumb1.png" alt=""/></div>
                    <div className="h4latestnews-wrapper pos-rel">
                        <div className="h4news-tag mb-10">
                            <span><Link to="/blogDetails" className="f-500 green-color">Medical,</Link></span>
                            <span><Link to="/blogDetails" className="f-500 green-color">Medicine</Link></span>
                        </div>
                        <div className="h4news-content">
                            <h4 className="theme-color f-600">
                                <Link to="/blogDetails">{title}</Link>
                            </h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                            </p>
                        </div>
                        <div className="h4news-admin d-flex align-items-center mb-40">
                            <div className="h4adminnews-thumb">
                                <span><img src="img/home4/news/news-admin1.png" alt=""/>
                                    <span className="theme-color f-600">Barbara</span></span>
                            </div>
                            <div className="h4adminnews-date">
                                <span><i className="far fa-calendar-alt"></i>{`05 January 20${date}`}</span>
                            </div>
                        </div>
                        <div className="h4news-button">
                            <Link to="/blogDetails" className="primary_btn btn-icon btn-icon-gray ml-0"><span>+</span>read more</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeFourSingleBlog;