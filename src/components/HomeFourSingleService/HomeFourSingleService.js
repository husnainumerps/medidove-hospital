import React from 'react';
import { Link } from 'react-router-dom';

const HomeFourSingleService = ({image,name,title}) => {
   return (
      <>
         <div className="h4service-item">
            <div className="h4service-box white-bg mb-30">
               <div className="service-thumb pos-rel mb-0">
                  <img src={`img/home4/services/h4__services__thumb${image}.png`} alt=""/>
                  <Link className="h4services-tag green-bg white-color text-uppercase f-700" to="/servicesDetails">{name}</Link>
               </div>
               <div className="service-content h4services-content">
                  <h3><Link to="/servicesDetails">{title}</Link></h3>
                  <p className="mb-20">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                  ex ea commodo.</p>
                  <Link className="service-link" to="/servicesDetails">Read More
                  <i className="fal fa-long-arrow-right"></i></Link>
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeFourSingleService;