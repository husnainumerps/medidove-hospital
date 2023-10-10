import React from 'react';
import HomeFiveRoutineOne from '../../../components/HomeFiveRoutineOne/HomeFiveRoutineOne';

const HomeFiveRoutineArea = () => {
   return (
      <>
         <div className="routine routine__bg pos-rel  pt-130 pb-115 fix" style={{ background: 'url(img/bg/routine__bg.jpg)'}}>
            <div className="container">
               <div className="row pos-rel" style={{zIndex:'99'}}>
                  <div className="col-sm-12">
                     <div className="routine__table">
                        <table className="table">
                           <thead>
                              <tr>
                                 <th scope="col">
                                    <span className="routine--time__heading">Time Table</span>
                                 </th>
                                 <th scope="col">
                                    <span className="routine--day__heading">08 : 00 am</span>
                                 </th>
                                 <th scope="col">
                                    <span className="routine--day__heading">08 : 00 am</span>
                                 </th>
                                 <th scope="col">
                                    <span className="routine--day__heading">08 : 00 am</span>
                                 </th>
                                 <th scope="col">
                                    <span className="routine--day__heading">08 : 00 am</span>
                                 </th>
                                 <th scope="col">
                                    <span className="routine--day__heading">08 : 00 am</span>
                                 </th>
                                 <th scope="col">
                                    <span className="routine--day__heading">08 : 00 am</span>
                                 </th>
                              </tr>
                           </thead>
                           <tbody>
                              <tr>
                                 <th scope="row">Monday</th>

                                 <HomeFiveRoutineOne name="Williuma" />
                                 <HomeFiveRoutineOne name="Dillon" />
                                 <td></td>
                                 <HomeFiveRoutineOne name="Schroeder" />
                                 <td></td>
                                 <HomeFiveRoutineOne name="Schroeder" />
                              </tr>
                              <tr>
                                 <th scope="row">Tuesday</th>
                                 <td></td>
                                 <HomeFiveRoutineOne name="Schroeder" />
                                 <HomeFiveRoutineOne name="Schroeder" />
                                 <td></td>
                                 <HomeFiveRoutineOne name="Schroeder" />
                                 <td></td>
                              </tr>
                              <tr>
                                 <th scope="row">Wednesday</th>
                                 <HomeFiveRoutineOne name="Schroeder" />
                                 <td></td>
                                 <td></td>
                                 <HomeFiveRoutineOne name="Schroeder" />
                                 <td></td>
                                 <HomeFiveRoutineOne name="Schroeder" />
                              </tr>
                              <tr>
                                 <th scope="row">Thursday</th>
                                 <HomeFiveRoutineOne name="Schroeder" />
                                 <HomeFiveRoutineOne name="Schroeder" />
                                 <td></td>
                                 <HomeFiveRoutineOne name="Dillon" />
                                 <HomeFiveRoutineOne name="Schroeder" />
                                 <td></td>
                              </tr>
                              <tr>
                                 <th scope="row">Friday</th>
                                 <td></td>
                                 <HomeFiveRoutineOne name="Dillon" />
                                 <HomeFiveRoutineOne name="Schroeder" />
                                 <td></td>
                                 <td></td>
                                 <HomeFiveRoutineOne name="Dillon" />
                              </tr>
                              <tr>
                                 <th scope="row">Saturday</th>
                                 <HomeFiveRoutineOne name="Schroeder" />
                                 <td>Otto</td>
                                 <td>@mdo</td>
                                 <HomeFiveRoutineOne name="Schroeder" />
                                 <HomeFiveRoutineOne name="Dillon" />
                                 <HomeFiveRoutineOne name="Schroeder" />
                              </tr>
                              <tr>
                                 <th scope="row">Sunday</th>
                                 <td></td>
                                 <HomeFiveRoutineOne name="Schroeder" />
                                 <HomeFiveRoutineOne name="Dillon" />
                                 <td></td>
                                 <HomeFiveRoutineOne name="Schroeder" />
                                 <td></td>
                              </tr>
                           </tbody>
                        </table>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeFiveRoutineArea;