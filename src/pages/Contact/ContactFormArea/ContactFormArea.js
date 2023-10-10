import React from 'react';
import { Link } from 'react-router-dom';

const ContactFormArea = () => {
   return (
      <>
         <section className="contact-form-area gray-bg pt-100 pb-100">
            <div className="container">
               <div className="form-wrapper">
                  <div className="row align-items-center">
                     <div className="col-xl-8 col-lg-8">
                        <div className="section-title mb-55">
                           <p><span></span> Anything On your Mind</p>
                           <h1>Estimate Your Idea</h1>
                        </div>
                     </div>
                     <div className="col-xl-4 col-lg-3 d-none d-xl-block ">
                        <div className="section-link mb-80 text-end">
                           <Link to="/appoinment"
                           className="primary_btn btn-icon ml-0"><span>+</span>Make
                              Appointment</Link>
                        </div>
                     </div>
                  </div>
                  <div className="contact-form">
                     <form id="contact-form" action="#">
                        <div className="row">
                           <div className="col-lg-6">
                              <div className="form-box user-icon mb-30">
                                 <input type="text" name="name" placeholder="Your Name" />
                              </div>
                           </div>
                           <div className="col-lg-6">
                              <div className="form-box email-icon mb-30">
                                 <input type="text" name="email" placeholder="Your Email" />
                              </div>
                           </div>
                           <div className="col-lg-6">
                              <div className="form-box phone-icon mb-30">
                                 <input type="text" name="phone" placeholder="Your Phone" />
                              </div>
                           </div>
                           <div className="col-lg-6">
                              <div className="form-box subject-icon mb-30">
                                 <input type="text" name="subject" placeholder="Your Subject" />
                              </div>
                           </div>
                           <div className="col-lg-12">
                              <div className="form-box message-icon mb-30">
                                 <textarea name="message" id="message" cols="30" rows="10"
                                    placeholder="Your Message"></textarea>
                              </div>
                              <div className="contact-btn text-center">
                                 <button className="primary_btn btn-icon ml-0" type="button"><span>+</span> get action</button>
                              </div>
                           </div>
                        </div>
                     </form>
                     <p className="ajax-response text-center"></p>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default ContactFormArea;