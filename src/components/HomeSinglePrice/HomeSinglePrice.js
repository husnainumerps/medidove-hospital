import React from 'react';
import { Link } from 'react-router-dom';

const HomeSinglePrice = ({image,title,price}) => {
   return (
      <>
         <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="pricing-box mb-30">
               <div className="pricing-thumb mb-45">
                  <img src={`img/pricing/pricing-thumb-${image}.png`} alt=""/>
               </div>
               <div className="pricing-content">
                  <h1>{title}</h1>
                  <p>Ut enim ad minim veniam, quis istomw nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                     commodo.</p>
                  <Link to="/contact" className="primary_btn btn-icon ml-0">
                  <span>+</span>Price: ${price}</Link>
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeSinglePrice;