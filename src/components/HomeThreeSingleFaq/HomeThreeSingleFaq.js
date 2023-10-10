import React from 'react';

const HomeThreeSingleFaq = ({ number, condition = false, fistClassAdd,secondClassAdd}) => {
   return (
      <>
         <div className="card">
            <div className="card-header" id={`heading${number}`}>
               <h5 className="mb-0">
                  <a href='#' className={`btn-link ${fistClassAdd && fistClassAdd}`}
                  data-bs-toggle="collapse" data-bs-target={`#collapse${number}`}
                     aria-controls={`collapse${number}`} aria-expanded={condition} >
                     Why we doing batter with medidove wp theme?
                  </a>
               </h5>
            </div>
            <div id={`collapse${number}`} className={`collapse ${secondClassAdd && secondClassAdd}`}
            aria-labelledby={`heading${number}`} data-parent="#accordion">
               <div className="card-body">
                  <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                     irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeThreeSingleFaq;