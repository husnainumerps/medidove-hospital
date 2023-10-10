import React from 'react';
import CountUp from 'react-countup';

const SingleCount = ({icon,counter,title}) => {
    return (
        <>
            <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="single-couter counter-box counter-box-white text-center mb-30">
                    <img src={`img/counter/counter-icon-${icon}.png`} alt=""/>
                    <h1><span className="theme-color counter"><CountUp end={counter} duration={8} /></span>+</h1>
                        <h6 className="green-color pb-20">{title}</h6>
                        <div className="counter-text mt-10">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut lab.</p>
                        </div>
                </div>
            </div>
        </>
    );
};

export default SingleCount;