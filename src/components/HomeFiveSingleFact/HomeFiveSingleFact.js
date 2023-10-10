import React from 'react';
import CountUp from 'react-countup';

const HomeFiveSingleFact = ({icon,number,title}) => {
   return (
      <>
         <div className="col-lg-3 col-md-6">
            <div className="h5fact-wrapper mb-35">
               <i className={`fal ${icon}`}></i>
               <span className="coutner"><CountUp end={number} duration={8} /></span>
               <h5>{title}</h5>
               <p>Avoids pleasure itself but who do not know how pursue pleasure rationally encounter cons</p>
            </div>
         </div>
      </>
   );
};

export default HomeFiveSingleFact;