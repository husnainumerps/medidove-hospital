import React from 'react';
import { Link } from 'react-router-dom';

const HomeThreeSinglePricing = ({title,price,pink_bg,green_bg_color,conditionOne,conditionTwo,conditionThree}) => {
   return (
      <>
         <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="price-box-flat mb-30">
               <div className="pricing-title">
                  <h6 className={`green-color text-up-case letter-spacing ${pink_bg && pink_bg}`}>{title}</h6>
               </div>
               <div className="price-content">
                  <div className="price-heading">
                     <h1><span className="pink-color">$</span>{price}</h1>
                  </div>
                  <div className="pricing-list">
                     <ul>
                        <li><i className="fas fa-check"></i>Review of Safety Program</li>
                        <li><i className="fas fa-check"></i>Annual Sexual Harassment Training</li>
                        <li><i className="fas fa-check"></i>Monthly Newsletter</li>
                        {conditionOne && <><li className="price-del"><i className="fas fa-check"></i><del>Safety Training Topics</del></li>
                           <li className="price-del"><i className="fas fa-check"></i><del>Monthly health check-ups</del></li>
                           <li className="price-del"><i className="fas fa-check"></i><del>Early illness diagnoses</del></li></> }
                           {
                           conditionTwo && <><li><i className="fas fa-check"></i>Safety Training Topics</li>
                              <li className="price-del"><i className="fas fa-check"></i><del>Monthly health check-ups</del></li>
                              <li className="price-del"><i className="fas fa-check"></i><del>Early illness diagnoses</del></li></>
                        }
                        {
                           conditionThree && <>
                              <li><i className="fas fa-check"></i>Safety Training Topics</li>
                              <li><i className="fas fa-check"></i>Monthly health check-ups</li>
                              <li><i className="fas fa-check"></i>Early illness diagnoses</li>
                           </>
                        }
                     </ul>
                  </div>
               </div>
               <div className="price-btn-2">
                  <Link to="/contact" className={`primary_btn ${green_bg_color && green_bg_color}`}>get appointment</Link>
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeThreeSinglePricing;