import React from 'react';
import { Link } from 'react-router-dom';

const BlogDetailsRightSide = () => {
    return (
        <>
            <div className="col-lg-4">
                <div className="widget mb-40">
                    <div className="widget-title-box mb-30">
                        <span className="animate-border"></span>
                        <h3 className="widget-title">Search Objects</h3>
                    </div>
                    <form className="search-form">
                        <input type="text" placeholder="Search your keyword..."/>
                            <button type="submit"><i className="fas fa-search"></i></button>
                    </form>
                </div>
                <div className="widget mb-40">
                    <div className="widget-title-box mb-30">
                        <span className="animate-border"></span>
                        <h3 className="widget-title">About Me</h3>
                    </div>
                    <div className="about-me text-center">
                        <img src="img/blog/details/me.jpg" alt=""/>
                            <h4>Zulia Maron Duo</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                                ut labore.</p>
                            <div className="widget-social-icon">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-behance"></i></a>
                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                <a href="#"><i className="fab fa-youtube"></i></a>
                            </div>
                    </div>
                </div>
                <div className="widget mb-40">
                    <div className="widget-title-box mb-30">
                        <span className="animate-border"></span>
                        <h3 className="widget-title">Popular Feeds</h3>
                    </div>
                    <ul className="recent-posts">
                        <li>
                            <div className="widget-posts-image">
                                <Link to="/blogDetails"><img src="img/blog/details/img1.jpg" alt=""/></Link>
                            </div>
                            <div className="widget-posts-body">
                                <h6 className="widget-posts-title"><Link to="/blogDetails">Lorem ipsum dolor sit
                                    cing elit, sed do.</Link></h6>
                                <div className="widget-posts-meta">October 18, 2021 </div>
                            </div>
                        </li>
                        <li>
                            <div className="widget-posts-image">
                                <Link to="/blogDetails"><img src="img/blog/details/img2.jpg" alt=""/></Link>
                            </div>
                            <div className="widget-posts-body">
                                <h6 className="widget-posts-title"><Link to="/blogDetails">Lorem ipsum dolor sit
                                    cing elit, sed do.</Link></h6>
                                <div className="widget-posts-meta">October 24, 2021 </div>
                            </div>
                        </li>
                        <li>
                            <div className="widget-posts-image">
                                <Link to="/blogDetails"><img src="img/blog/details/img3.jpg" alt=""/></Link>
                            </div>
                            <div className="widget-posts-body">
                                <h6 className="widget-posts-title"><Link to="/blogDetails">Lorem ipsum dolor sit
                                    cing elit, sed do.</Link></h6>
                                <div className="widget-posts-meta">October 28, 2021 </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="widget mb-40">
                    <div className="widget-title-box mb-30">
                        <span className="animate-border"></span>
                        <h3 className="widget-title">Categories</h3>
                    </div>
                    <ul className="cat">
                        <li>
                            <Link to="/blogDetails">Lifestyle <span className="f-right">78</span></Link>
                        </li>
                        <li>
                            <Link to="/blogDetails">Travel <span className="f-right">42</span></Link>
                        </li>
                        <li>
                            <Link to="/blogDetails">Fashion <span className="f-right">32</span></Link>
                        </li>
                        <li>
                            <Link to="/blogDetails">Music <span className="f-right">85</span></Link>
                        </li>
                        <li>
                            <Link to="/blogDetails">Branding <span className="f-right">05</span></Link>
                        </li>
                    </ul>
                </div>
                <div className="widget mb-40">
                    <div className="widget-title-box mb-30">
                        <span className="animate-border"></span>
                        <h3 className="widget-title">Social Profile</h3>
                    </div>
                    <div className="social-profile">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-behance"></i></a>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        <a href="#"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>
                <div className="widget mb-40">
                    <div className="widget-title-box mb-30">
                        <span className="animate-border"></span>
                        <h3 className="widget-title">Instagram Feeds</h3>
                    </div>
                    <ul id="Instafeed">
                        <li><a href="#"><img src="img/instagram/ins1.jpg" alt=""/></a></li>
                        <li><a href="#"><img src="img/instagram/ins2.jpg" alt=""/></a></li>
                        <li><a href="#"><img src="img/instagram/ins3.jpg" alt=""/></a></li>
                        <li><a href="#"><img src="img/instagram/ins4.jpg" alt=""/></a></li>
                        <li><a href="#"><img src="img/instagram/ins5.jpg" alt=""/></a></li>
                        <li><a href="#"><img src="img/instagram/ins6.jpg" alt=""/></a></li>
                        <li><a href="#"><img src="img/instagram/ins7.jpg" alt=""/></a></li>
                        <li><a href="#"><img src="img/instagram/ins8.jpg" alt=""/></a></li>
                        <li><a href="#"><img src="img/instagram/ins9.jpg" alt=""/></a></li>
                    </ul>
                </div>
                <div className="widget mb-40">
                    <div className="widget-title-box mb-30">
                        <span className="animate-border"></span>
                        <h3 className="widget-title">Instagram Feeds</h3>
                    </div>
                    <div className="tag">
                        <Link to="/blogs">Popular</Link>
                        <Link to="/blogs">desgin</Link>
                        <Link to="/blogs">usability</Link>
                        <Link to="/blogs">develop</Link>
                        <Link to="/blogs">consult</Link>
                        <Link to="/blogs">icon</Link>
                        <Link to="/blogs">HTML</Link>
                        <Link to="/blogs">ux</Link>
                        <Link to="/blogs">business</Link>
                        <Link to="/blogs">kit</Link>
                        <Link to="/blogs">keyboard</Link>
                        <Link to="/blogs">tech</Link>
                    </div>
                </div>
                <div className="widget mb-40 p-0 b-0">
                    <div className="banner-widget">
                   <Link to="/contact"><img src="img/blog/details/banner.png" alt=""/></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogDetailsRightSide;