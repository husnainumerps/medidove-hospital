import React from 'react';

const HomeFiveRoutineOne = ({name}) => {
   return (
      <>
         <td className="active-doctor">
            <div className="doctor--routine__wrapper">
               <h2>{`Dr. ${name}`}</h2>
               <span>08 am - 02 pm</span>
            </div>
         </td>
      </>
   );
};

export default HomeFiveRoutineOne;