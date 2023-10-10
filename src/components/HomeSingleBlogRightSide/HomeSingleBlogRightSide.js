import React from 'react';
import { Link } from 'react-router-dom';

const HomeSingleBlogRightSide = ({border}) => {
    return (
        <>
            <div className={border ? `latest-news-content singl-news ${border}` :
            `latest-news-content singl-news news-border-bottom`}>
                <h3><Link to="/blogDetails">Lorem ipsum dolor sit amet, consectetur adidis.</Link></h3>
                <span className="meta-date"><i className="far fa-calendar"></i>23rd Jan 2022</span>
                <span className="meta-date"><Link to="/blogDetails"><i className="far fa-comments"></i>33 Comments</Link></span>
            </div>
        </>
    );
};

export default HomeSingleBlogRightSide;