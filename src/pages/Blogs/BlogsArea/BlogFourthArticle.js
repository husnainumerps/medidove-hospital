import React from 'react';
import { Link } from 'react-router-dom';

const BlogFourthArticle = () => {
    return (
        <>
            <article className="postbox post format-audio mb-40">
                <div className="postbox__audio embed-responsive embed-responsive-16by9">
                    <iframe title='blog audio'
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/469608615&color=%23ff0000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" width={'100%'} height={450}></iframe>
                </div>
                <div className="postbox__text p-50">
                    <div className="post-meta mb-15">
                        <span><i className="far fa-calendar-check"></i> September 15, 2021 </span>
                        <span><Link to="/blogDetails"><i className="far fa-user"></i> Diboli B. Joly</Link></span>
                        <span><Link to="/blogDetails"><i className="far fa-comments"></i> 23 Comments</Link></span>
                    </div>
                    <h3 className="blog-title">
                        <Link to="/blogDetails">If you find yourself constantly bookmarking health sections on news.</Link>
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

export default BlogFourthArticle;