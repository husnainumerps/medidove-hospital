import React from 'react';
import CountUp from 'react-countup';

const HomeFourSingleCounterGallery = ({icon,color,colorTwo,number,title}) => {
    return (
        <>
          <div className="col-lg-6 col-md-6">
             <div className="h4facts-single border-facts text-center mb-30">
                <i className={`h4facts-icon h4facts-icon${color}`}><img src={`img/home4/fact/icon${icon}.png`} alt=""/></i>
                <span className={`counter f-600 ${colorTwo}-color`}><CountUp end={number} duration={8} /></span>
                <h5 className="f-500 theme-color">{title}</h5>
             </div>
          </div>
        </>
    );
};

export default HomeFourSingleCounterGallery;