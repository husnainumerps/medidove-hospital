import React from 'react';
import SingleBlog from '../../../components/SingleBlog/SingleBlog';

const HomeTwoBlogs = () => {
    return (
        <>
            <section className="latest-news-area gray-bg pt-115 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="section-title text-center pos-rel mb-70">
                                <div className="section-icon">
                                    <img className="section-back-icon" src="img/section/section-back-icon.png" alt=""/>
                                </div>
                                <div className="section-text pos-rel">
                                    <h5>News</h5>
                                    <h1>Get Every Single <br/> Updates From Here.</h1>
                                </div>
                                <div className="section-line pos-rel">
                                    <img src="img/shape/section-title-line.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">

                        <SingleBlog image="1" />
                        <SingleBlog image="2" />
                        <SingleBlog image="3" />

                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeTwoBlogs;