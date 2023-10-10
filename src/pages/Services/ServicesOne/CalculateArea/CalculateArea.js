import React from 'react';
import { Link } from 'react-router-dom';


const CalculateArea = () => {

   return (
      <>
         <section className="calculate-area pos-rel pt-115 pb-120" data-background="img/calculate/calculate-bg.png">
            <div className="container calculate_wrapper">
               <div className="row">
                  <div className="col-xl-7 col-lg-6 col-md-10">
                     <div className="section-title calculate-section pos-rel mb-45">
                        <div className="section-text section-text-white pos-rel">
                           <h5>make a call</h5>
                           <h1 className="white-color">Quote Calculator</h1>
                           <p>If you require services on a public holiday, overnight services or live-in services, please call (+00)888.666.88 so we
                              can discuss prices with you.</p>
                        </div>
                     </div>
                     <div className="section-button section-button-left mb-30">
                        <Link to="/contact"
                         className="primary_btn btn-icon btn-icon-green ml-0"><span>+</span>Make Appointment</Link>
                     </div>
                  </div>
                  <div className="col-xl-5 col-lg-6">
                     <div className="calculate-box white-bg">
                        <div className="calculate-content">
                           <div className="row">
                              <div className="col-xl-12">
                                 <select defaultValue={'DEFAULT'} className="form-select select_style">
                                    <option defaultValue={'When would you like our support?'}>
                                     When would you like our support?</option>
                                    <option defaultValue={'DEFAULT'}>When would you like our support?</option>
                                 </select>
                              </div>
                              <div className="col-xl-12">

                                 <select defaultValue={'DEFAULT'} className="form-select select_style">
                                    <option defaultValue={'When would you like us arrive?'}>When would you like us arrive?</option>
                                    <option defaultValue={'DEFAULT'}>When would you like our support?</option>
                                 </select>
                              </div>
                              <div className="col-xl-12">
                                 <select defaultValue={'DEFAULT'} className="form-select select_style">
                                    <option defaultValue={'How long should we stay?'}>How long should we stay?</option>
                                    <option defaultValue={'DEFAULT'}>When would you like our support?</option>
                                 </select>
                              </div>
                              <div className="col-xl-12">
                                 <select defaultValue={'DEFAULT'} className="form-select select_style">
                                    <option defaultValue={'Where are you located?'}>Where are you located?</option>
                                    <option defaultValue={'DEFAULT'}>When would you like our support?</option>
                                 </select>
                              </div>
                              <div className="col-xl-12">
                                 <form className="calculate-form" action="#">
                                    <input type="text" placeholder="Your Phone number"/>
                                       <i className="fas fa-phone"></i>
                                 </form>
                              </div>
                           </div>
                        </div>
                        <a href="#" className="primary_btn mt-40">submit query</a>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default CalculateArea;