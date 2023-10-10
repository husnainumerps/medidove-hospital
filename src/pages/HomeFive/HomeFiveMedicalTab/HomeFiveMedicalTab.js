import React from 'react';
import HomeFiveSingleMedicalTab from '../../../components/HomeFiveSingleMedicalTab/HomeFiveSingleMedicalTab';

const HomeFiveMedicalTab = () => {
   return (
      <>
         <div className="medical-tab medical-tab-border">
            <div className="container">
               <div className="row">
                  <div className="col-sm-12">
                     <div className="h5medical-tab-menu pos-rel">
                        <nav>
                           <div className="nav nav-tabs" id="nav-tab" role="tablist">
                              <a className="nav-item nav-link active" id="nav-home-tab" data-bs-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true"><i><img src="img/home5/tab/tab__menu__icon1.png"
                              alt=""/></i> Dental Anxiety</a>
                              <a className="nav-item nav-link" id="nav-profile-tab" data-bs-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false"><i><img src="img/home5/tab/tab__menu__icon2.png" alt=""/></i> Orthopedic</a>
                              <a className="nav-item nav-link" id="nav-contact-tab" data-bs-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false"><i><img src="img/home5/tab/tab__menu__icon3.png" alt=""/></i> Dermatological</a>
                           </div>
                        </nav>
                     </div>
                  </div>
                  <div className="col-sm-12">
                     <div className="h5medical-tab-body">
                        <div className="tab-content" id="nav-tabContent">
                           <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                             <HomeFiveSingleMedicalTab/>
                           </div>
                           <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                              <HomeFiveSingleMedicalTab />
                           </div>
                           <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                              <HomeFiveSingleMedicalTab />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeFiveMedicalTab;