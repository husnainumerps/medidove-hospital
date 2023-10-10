import React from 'react';
import CountUp from 'react-countup';

const HomeTwoSingleCount = ({icon,counter,subtitle}) => {
   return (
      <>
         <div className="col-lg-2 col-md-3">
            <div className="single-couter counter-box text-center mb-180">
               <img src={`img/counter/counter-icon-${icon}.png`} alt=""/>
               <h1><span className="counter"><CountUp end={counter} duration={8} /></span>+</h1>
               <h6 className="green-color">{subtitle}</h6>
            </div>
         </div>
      </>
   );
};

export default HomeTwoSingleCount;