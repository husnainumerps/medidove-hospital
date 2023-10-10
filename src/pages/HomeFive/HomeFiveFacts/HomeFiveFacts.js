import React from 'react';
import HomeFiveSingleFact from '../../../components/HomeFiveSingleFact/HomeFiveSingleFact';

const HomeFiveFacts = () => {
   return (
      <>
         <div className="fact h5fact-border pt-130 pb-90">
            <div className="container">
               <div className="row">
                  <HomeFiveSingleFact icon="fa-clinic-medical" number="3624" title="World Wide Medical Branch" />
                  <HomeFiveSingleFact icon="fa-user-nurse" number="5236" title="Trusted & Friendly Nurse" />
                  <HomeFiveSingleFact icon="fa-trophy-alt" number="8950" title="We Wins Many Int Awards" />
                  <HomeFiveSingleFact icon="fa-ambulance" number="4562" title="Emergency Ambulance" />
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeFiveFacts;