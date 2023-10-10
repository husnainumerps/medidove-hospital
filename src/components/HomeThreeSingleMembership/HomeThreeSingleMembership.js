import React from 'react';

const HomeThreeSingleMembership = ({icon,title}) => {
    return (
        <>
            <div className="col-xl-6 col-lg-6">
                <div className="single-membership-box mb-30">
                    <img className="member-ship-icon mb-25" src={`img/membership/offer-${icon}.png`} alt="" />
                    <h3 className="mb-20">{title}</h3>
                    <img className="membership-line-shape" src="img/membership/member-ship-line-shape.png" alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                </div>
            </div>
        </>
    );
};

export default HomeThreeSingleMembership;