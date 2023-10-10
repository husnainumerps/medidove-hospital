import React from 'react';

const HomeTwoSingleTeam = ({image}) => {
   return (
      <>
         <div className="col-xl-12">
            <div className="team-box pos-rel mb-50">
               <div className="team-thumb">
                  <img src={`img/team/team-member-${image}.jpg`} alt=""/>
               </div>
               <div className="team-author-info">
                  <span>Founder</span>
                  <h6>Rosalina D. Williamson</h6>
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeTwoSingleTeam;