import React from 'react';

const HomeFourSingleHowWorksItem = ({ icon, title, moveIcon}) => {
   return (
      <>
         <div className={`col-lg-3 col-md-4 ${moveIcon && 'pos-rel'}`}>
            <div className="howit-box text-center mb-40">
               <i><img src={`img/home4/how/icon${icon}.png`} alt=""/></i>
               <h3>{title}</h3>
               <p>Lorem ipsum dolor sit amet, consecte turadipisicing elit, sed do eiusmod tempor incididunt ut lab.</p>
               {moveIcon && <img src="img/home4/how/move-icon.png" alt="" className={moveIcon ? 'move-icon' : '' }/>}
            </div>
         </div>
      </>
   );
};

export default HomeFourSingleHowWorksItem;