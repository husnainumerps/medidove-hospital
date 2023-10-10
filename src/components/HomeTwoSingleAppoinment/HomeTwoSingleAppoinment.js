import React from 'react';

const HomeTwoSingleAppoinment = ({icon,name}) => {
   return (
      <>
         <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="appoinment-form-box d-flex mb-40">
               <div className="appoint-ment-icon">
                  <img src={`img/icon/caregive-option-icon-${icon}.png`} alt="" />
               </div>
               <form className="appointment-form-2" action="#">
                  <label htmlFor="input">your {name}</label>
                  <input type="text" placeholder={`Enter Your ${name}`} />
               </form>
            </div>
         </div>
      </>
   );
};

export default HomeTwoSingleAppoinment;