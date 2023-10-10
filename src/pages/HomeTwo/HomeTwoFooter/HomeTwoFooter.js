import React from 'react';
import { Link } from 'react-router-dom';
import HomeSingleFooterBlog from '../../../components/HomeSingleFooterBlog/HomeSingleFooterBlog';

const HomeTwoFooter = () => {
   return (
      <>
         <footer>
            <div className="footer-top theme-bg pt-100">
               <div className="container">
                  <div className="footer-top-form mb-60">
                     <div className="row align-items-center">
                        <div className="col-xl-4 col-lg-4 col-md-4">
                           <div className="footer-logo-2">
                              <img src="img/logo/logo-2.png" alt=""/>
                           </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 d-none d-lg-block d-xl-block">
                           <div className="footer-subscribe-title">
                              <span>Subscribe to Our Newsletter</span>
                           </div>
                        </div>
                        <div className="col-xl-6 col-lg-5 col-md-8">
                           <form className="footer-newsletter" action="#">
                              <input type="text" placeholder="Your Email Address...."/>
                                 <button className="primary_btn">subscribe</button>
                           </form>
                        </div>
                     </div>
                  </div>
                  <div className="footer-mid pb-60">
                     <div className="row">
                        <div className="col-xl-4 col-lg-6 col-md-6">
                           <div className="footer-widget mb-40">
                              <div className="footer-contact-info-2">
                                 <div className="f-contact-info-box fix mb-30">
                                    <div className="footer-co-icon f-left">
                                       <img src="img/icon/footer-co-icon-1.png" alt=""/>
                                    </div>
                                    <div className="footer-co-content">
                                       <span>Mon to Fri : 08h30 - 18h00</span>
                                       <h4>+898 68679 575 09</h4>
                                    </div>
                                 </div>
                                 <div className="f-contact-info-box fix mb-30">
                                    <div className="footer-co-icon f-left">
                                       <img src="img/icon/footer-co-icon-2.png" alt=""/>
                                    </div>
                                    <div className="footer-co-content">
                                       <span>do you have a question?</span>
                                       <h4>info@gmail.com</h4>
                                    </div>
                                 </div>
                                 <div className="f-contact-info-box fix mb-30">
                                    <div className="footer-co-icon f-left">
                                       <img src="img/icon/footer-co-icon-2.png" alt=""/>
                                    </div>
                                    <div className="footer-co-content">
                                       <span>socials network</span>
                                       <ul>
                                          <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                          <li><a href="#"><i className="fab fa-behance"></i></a></li>
                                          <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                                          <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                          <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6">
                           <div className="footer-widget mb-40">
                              <div className="footer-title">
                                 <h3>Departments</h3>
                              </div>
                              <div className="footer-menu footer-menu-2 fix">
                                 <ul>
                                    <li><Link to="/servicesDetails">Surgery and Radiology</Link></li>
                                    <li><Link to="/servicesDetails">Departments</Link></li>
                                    <li><Link to="/servicesDetails">Family Medicine</Link></li>
                                    <li><Link to="/doctors">Our Doctors</Link></li>
                                    <li><Link to="/servicesDetails">Women’s Health</Link></li>
                                    <li><Link to="/blogs">News</Link></li>
                                    <li><Link to="/servicesDetails">Optician</Link></li>
                                    <li><Link to="/shop">Shop</Link></li>
                                    <li><Link to="/servicesDetails">Pediatrics</Link></li>
                                    <li><Link to="/contact">Contact Us</Link></li>
                                    <li><Link to="/servicesDetails">Dermatology</Link></li>
                                    <li><Link to="/contact">Book an Appointment</Link></li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                           <div className="footer-widget mb-40">
                              <div className="footer-title">
                                 <h3>News Feeds</h3>
                              </div>
                              <div className="blog-feeds pe-15">

                                 <HomeSingleFooterBlog image="1" />
                                 <HomeSingleFooterBlog image="2" />
                                 <HomeSingleFooterBlog image="3" />

                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="footer-bottom-0">
                     <div className="row">
                        <div className="col-xl-12">
                           <div className="footer-copyright-area text-center">
                              <p className="white-color">Copyright ©2022 <strong><a className="white-color"
                              href="#">Basictheme. </a></strong> All rights reserved</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
      </>
   );
};

export default HomeTwoFooter;