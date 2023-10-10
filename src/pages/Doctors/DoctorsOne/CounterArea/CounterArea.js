import React from 'react';
import SingleCount from '../../../../components/SingleCount/SingleCount';

const CounterArea = () => {
   return (
      <>
         <section className="about-area pt-120 pb-80">
            <div className="container">
               <div className="row">

                  <SingleCount icon="7" counter="540" title="Expert Doctors" />
                  <SingleCount icon="83" counter="899" title="Problem Solve" />
                  <SingleCount icon="9" counter="100" title="Award Winner" />

               </div>
            </div>
         </section>
      </>
   );
};

export default CounterArea;