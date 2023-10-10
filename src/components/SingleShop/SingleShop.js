import React from 'react';
import { Link } from 'react-router-dom';

const SingleShop = ({image,name,title}) => {

    return (
        <>
            <div className="col-lg-4 col-md-6">
                <div className="product mb-40">
                    <div className="product__img">
                        <Link to="/shopDetails"><img src={`img/shop/img${image}.jpg`} alt=""/></Link>
                        <div className="product-action text-center">
                            <a href="#"><i className="fas fa-shopping-cart"></i></a>
                            <a href="#"><i className="fas fa-heart"></i></a>
                            <Link to="/shopDetails"><i className="fas fa-expand"></i></Link>
                        </div>
                    </div>
                    <div className="product__content text-center pt-30">
                        <span className="pro-cat"><a href="#">{name}</a></span>
                        <h4 className="pro-title"><Link to="/shopDetails">{title}</Link></h4>
                        <div className="price">
                            <span>$95.00</span>
                            <span className="old-price">$120.00</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleShop;