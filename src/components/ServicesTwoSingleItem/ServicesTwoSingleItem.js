import React from 'react';
import { Link } from 'react-router-dom';

const ServicesTwoSingleItem = ({image,title}) => {
    return (
        <>
            <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="service-box-3 mb-30 text-center">
                    <div className="service-thumb">
                        <Link to="/servicesDetails">
                            <img src={`img/blog/news-thumb-${image}.jpg`} alt="" />
                        </Link>
                    </div>
                    <div className="service-content-box">
                        <div className="service-content">
                            <h3><Link to="/blogDetails">{title}</Link></h3>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo.</p>
                        </div>
                        <Link to="/servicesDetails" className="service-link">Read More</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesTwoSingleItem;