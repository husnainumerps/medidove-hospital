import React from 'react';
import { Link } from 'react-router-dom';

const DoctorDetailsArea = () => {
   return (
      <>
         <div className="doctor-details-area pt-115 pb-70">
            <div className="container">
               <div className="row">
                  <div className="col-xl-7 col-lg-8">
                     <article className="doctor-details-box">
                        <div className="section-title pos-rel mb-25">
                           <div className="section-icon">
                              <img className="section-back-icon back-icon-left" src="img/section/section-back-icon-sky.png"
                                 alt="" />
                           </div>
                           <div className="section-text pos-rel">
                              <h5 className="green-color text-up-case">introducing my self</h5>
                              <h1>There Is Nothing To Show Something.</h1>
                           </div>
                           <div className="section-line pos-rel">
                              <img src="img/shape/section-title-line.png" alt="" />
                           </div>
                        </div>
                        <div className="service-details-text mb-40">
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                              aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                              occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde
                              omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                              inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
                              porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
                              tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                        </div>
                        <div className="section-title pos-rel mb-25">
                           <div className="section-text pos-rel">
                              <h1>Here Is Skills</h1>
                           </div>
                           <div className="section-line pos-rel">
                              <img src="img/shape/section-title-line.png" alt="" />
                           </div>
                        </div>
                        <div className="service-details-text mb-35">
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                              aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                              occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde
                              omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                        </div>
                        <div className="service-details-feature fix mb-30">
                           <div className="ser-fea-box f-left">
                              <div className="ser-fea-icon f-left">
                                 <img src="img/services/ser-fea-icon-1.png" alt="" />
                              </div>
                              <div className="ser-fea-list fix">
                                 <h3>Personal care</h3>
                                 <ul>
                                    <li><i className="fas fa-check"></i>Cillum dolore eu fugiat nulla.</li>
                                    <li><i className="fas fa-check"></i>Lorem ipsum dolor sit amet.</li>
                                    <li><i className="fas fa-check"></i>Consectetur adipisicing elit,</li>
                                    <li><i className="fas fa-check"></i>Sed do eiusmod tempor inci.</li>
                                 </ul>
                              </div>
                           </div>
                           <div className="ser-fea-box f-left me-0">
                              <div className="ser-fea-icon f-left">
                                 <img src="img/services/ser-fea-icon-2.png" alt="" />
                              </div>
                              <div className="ser-fea-list fix">
                                 <h3>Lifestyle support</h3>
                                 <ul>
                                    <li><i className="fas fa-check"></i>Didunt ut labore et dolore magna.</li>
                                    <li><i className="fas fa-check"></i>Aliqua. Ut enim ad minim veniam.</li>
                                    <li><i className="fas fa-check"></i>Quis nostrud exercitation ullamco.</li>
                                    <li><i className="fas fa-check"></i>Laboris nisi ut aliquip ex ea.</li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <div className="section-title pos-rel mb-25">
                           <div className="section-text pos-rel">
                              <h1>Care Coverage</h1>
                           </div>
                           <div className="section-line pos-rel">
                              <img src="img/shape/section-title-line.png" alt="" />
                           </div>
                        </div>
                        <div className="service-details-text mb-30">
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                              aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                              occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde
                              omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                        </div>
                        <div id="contact-map" className="service-map mb-55">

                           <div style={{ width: '100%' }}>
                              <iframe title="Contact" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58403.623581008454!2d90.32726121307132!3d23.81054442359749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0c1c61277db%3A0xc7d18838730e2e59!2z4Kau4Ka_4Kaw4Kaq4KeB4KawLCDgpqLgpr7gppXgpr4!5e0!3m2!1sbn!2sbd!4v1643621605621!5m2!1sbn!2sbd" style={{ width: '100%' }} height={400} allowFullScreen="" loading="lazy"></iframe>
                           </div>

                        </div>
                     </article>
                  </div>
                  <div className="col-xl-5 col-lg-4">
                     <div className="service-widget mb-50">
                        <div className="team-wrapper team-box-2 team-box-3 text-center mb-30">
                           <div className="team-thumb">
                              <img src="img/team/member-big.jpg" alt="" />
                           </div>
                           <div className="team-member-info mt-35 mb-35">
                              <h3><Link to="/doctorDetails">Halim D. Keliano</Link></h3>
                              <h6 className="f-500 text-up-case letter-spacing pink-color">Dentist & Neurologist</h6>
                           </div>
                           <div className="team-social-profile">
                              <ul>
                                 <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                 <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                 <li><a href="#"><i className="fab fa-behance"></i></a></li>
                                 <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                                 <li><a href="#"><i className="fab fa-pinterest"></i></a></li>
                                 <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                     <div className="service-widget mb-50">
                        <div className="widget-title-box mb-30">
                           <h3 className="widget-title">Qualifications</h3>
                        </div>
                        <div className="more-service-list">
                           <ul>
                              <li>
                                 <Link to="/doctorDetails">
                                    <div className="more-service-icon"><img src="img/services/more-ser-1.png" alt="" /></div>
                                    <div className="more-service-title doctor-details-title">Master of Science <span>Oxford Univercity (2011 - 2014)</span></div>
                                 </Link>
                              </li>
                              <li>
                                 <Link to="/doctorDetails">
                                    <div className="more-service-icon"><img src="img/services/more-ser-5.png" alt="" /></div>
                                    <div className="more-service-title doctor-details-title">Neurology Test <span>Stanford Versity (2015 - 2021)</span></div>
                                 </Link>
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div className="service-widget mb-80">
                        <div className="widget-title-box mb-30">
                           <h3 className="widget-title">Get Some Advice?</h3>
                        </div>
                        <form className="service-contact-form" action="">
                           <div className="row">
                              <div className="col-xl-12">
                                 <div className="contact-input contact-icon contact-user mb-20">
                                    <input type="text" placeholder="Enter your name" />
                                 </div>
                              </div>
                              <div className="col-xl-12">
                                 <div className="contact-input contact-icon contact-mail mb-20">
                                    <input type="text" placeholder="Enter your email" />
                                 </div>
                              </div>
                              <div className="col-xl-12">
                                 <div className="contact-input contact-icon contact-hourglass">
                                    <select className="form-select select_style" aria-label="Default select example">
                                       <option defaultValue="Select type of care">Select type of care</option>
                                       <option defaultValue="1">Select type of care</option>
                                       <option defaultValue="2">Select type of care</option>
                                       <option defaultValue="2">Select type of care</option>
                                    </select>
                                 </div>
                              </div>
                           </div>
                        </form>
                        <div className="ser-form-btn text-center mt-40">
                           <a href="#" className="primary_btn btn-icon ml-0"
                              style={{ animationDelay: '0.6s' }} tabIndex="0"><span>+</span>Request for call</a>
                        </div>
                     </div>
                     <div className="service-widget mb-50">
                        <div className="widget-title-box mb-30">
                           <h3 className="widget-title">Languages</h3>
                        </div>
                        <div className="doctor-detials-lan">
                           <ul>
                              <li><a href="#">en</a></li>
                              <li><a href="#">es</a></li>
                              <li><a href="#">bd</a></li>
                              <li><a href="#">la</a></li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default DoctorDetailsArea;