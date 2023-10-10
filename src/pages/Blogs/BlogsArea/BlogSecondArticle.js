import React from 'react';
import { Link } from 'react-router-dom';
import VideoPopup from '../../../components/VideoPopup/VideoPopup';
import useGlobalContext from '../../../hooks/useGlobalContext';

const BlogSecondArticle = () => {
    const { setIsOpen} = useGlobalContext();
    return (
        <>
            <VideoPopup videoId="Y6MlVop80y0" />

            <article className="postbox post format-video mb-40">
                <div className="postbox__video">
                    <img src="img/blog/b6.jpg" alt="blog" />
                    <button onClick={() => setIsOpen(true)} className="popup-video video-btn border-0"><i className="fas fa-play"></i></button>
                </div>
                <div className="postbox__text p-50">
                    <div className="post-meta mb-15">
                        <span><i className="far fa-calendar-check"></i> September 15, 2021 </span>
                        <span><Link to="/blogDetails"><i className="far fa-user"></i> Diboli B. Joly</Link></span>
                        <span><Link to="/blogDetails"><i className="far fa-comments"></i> 23 Comments</Link></span>
                    </div>
                    <h3 className="blog-title">
                        <Link to="/blogDetails">To help ease the process, we identified 75 of our favorite medical blogs.</Link>
                    </h3>
                    <div className="post-text mb-20">
                        <p>There’s a good chance Everyday Health is the most appropriately named blog on this list because it focuses on the health
                            topics that consistently affect a wide range of people. They also get kudos for addressing the emotional challenges
                            folks face when managing conditions.</p>
                    </div>
                    <div className="read-more mt-30">
                        <Link to="/blogDetails" className="primary_btn theme-btn">read more</Link>
                    </div>
                </div>
            </article>
        </>
    );
};

export default BlogSecondArticle;