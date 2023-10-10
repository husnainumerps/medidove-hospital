import React from 'react';
import SingleTeam from '../../../components/SingleTeam/SingleTeam';

const HomeFiveTeams = () => {
   return (
      <div>
         <section className="team-area pt-180 pb-65">
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
                     <div className="section-title text-center pos-rel mb-75">
                        <div className="section-icon">
                           <img className="section-back-icon" src="img/section/section-back-icon.png" alt=""/>
                        </div>
                        <div className="section-text pos-rel">
                           <h5>Our Team</h5>
                           <h1>A Professional & Care Provider</h1>
                        </div>
                        <div className="section-line pos-rel">
                           <img src="img/shape/section-title-line.png" alt=""/>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <SingleTeam number={1} image="1" name="Rosalina William" title="Founder" />
                  <SingleTeam number={2} image="2" name="Hekim D. Rswana" title="dentist" />
                  <SingleTeam number={3} image="3" name="Tarana Halim" title="neurologist" />
                  <SingleTeam number={4} image="4" name="Kelian M. Habblu" title="operator" />
               </div>
            </div>
         </section>
      </div>
   );
};

export default HomeFiveTeams;