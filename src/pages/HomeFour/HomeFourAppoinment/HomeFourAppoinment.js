import React from 'react';
import { Link } from 'react-router-dom';
import SingleAppoinmentInputField from '../../../components/SingleAppoinmentInputField/SingleAppoinmentInputField';

const HomeFourAppoinment = () => {
   return (
      <>
         <section className="appoinment pos-rel">
            <div className="h4appoinment-thumb"></div>
            <div className="container-fluid fix">
               <div className="col-xl-6 offset-xl-6">
                  <div className="h4appoinment-wrapper">
                     <div className="about-title mb-50">
                        <h5 className="pink-color">Make An Appointment</h5>
                        <h1>Get An Appointment <br/> For Get Release</h1>
                     </div>
                     <form className="h4appoinment-form mb-15">
                        <div className="row">

                           <SingleAppoinmentInputField placeholderText="Enter Your Name" icon="fal fa-user" />
                           <SingleAppoinmentInputField placeholderText="Enter Your Email" icon="far fa-envelope-open" />
                           <SingleAppoinmentInputField placeholderText="Enter Your Phone" icon="fal fa-phone" />
                           <SingleAppoinmentInputField placeholderText="Choose A Services" icon="fal fa-file-medical-alt" />

                        </div>
                     </form>
                     <div className="h4appoinment-button">
                        <Link to="/contact" className="primary_btn btn-icon ml-0"  style={{animationDelay:'0.6s'}} tabIndex="0"><span>+</span>Make Appointment</Link>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeFourAppoinment;