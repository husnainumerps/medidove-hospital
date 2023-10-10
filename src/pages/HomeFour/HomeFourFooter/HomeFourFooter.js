import React from 'react';
import { Link } from 'react-router-dom';
import HomeSingleFooterBlog from '../../../components/HomeSingleFooterBlog/HomeSingleFooterBlog';

const HomeFourFooter = () => {
   return (
      <>
         <footer>
            <div className="footer-top h4_footer primary-bg footer-map pos-rel pt-120 pb-80">
               <div className="container">
                  <div className="row justify-content-between">
                     <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="footer-contact-info footer-contact-info-3 mb-40">
                           <div className="footer-logo mb-35">
                              <Link to="/"><img src="img/logo/footer-logo-3.png" alt=""/></Link>
                           </div>
                           <div className="footer-contact-content mb-25">
                              <p className="p-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
                           </div>
                           <div className="footer-emailing">
                              <ul>
                                 <li><i className="far fa-envelope"></i>info@examplemedical.com</li>
                                 <li><i className="far fa-clone"></i>examplemedical.com</li>
                                 <li><i className="far fa-flag"></i>227 Marion Street, Columbia</li>
                              </ul>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="footer-widget h4footer-widget mb-40">
                           <div className="footer-title">
                              <h3>More Links</h3>
                           </div>
                           <div className="footer-menu footer-menu-2 h4footer-menu">
                              <ul>
                                 <li><Link to="/servicesDetails">Surgery and Radiology</Link></li>
                                 <li><Link to="/servicesDetails">Family Medicine</Link></li>
                                 <li><Link to="/servicesDetails">Women’s Health</Link></li>
                                 <li><Link to="/servicesDetails">Optician</Link></li>
                                 <li><Link to="/servicesDetails">Pediatrics</Link></li>
                                 <li><Link to="/servicesDetails">Dermatology</Link></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="footer-widget h4footer-widget mb-40">
                           <div className="footer-title">
                              <h3>Recent News</h3>
                           </div>
                           <div className="blog-feeds pe-15">
                               <HomeSingleFooterBlog image="1" />
                               <HomeSingleFooterBlog image="2" />
                               <HomeSingleFooterBlog image="3" />
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="footer-widget h4footer-widget mb-40">
                           <div className="footer-title">
                              <h3>Opening Hours</h3>
                           </div>
                           <div className="h4events-list mb-30">
                              <ul>
                                 <li><i className="fal fa-clock"></i><span>Sunday - Friday <span>08:00 am - 10:00pm</span></span></li>
                                 <li><i className="fal fa-times-square"></i><span className="close-days">Satarday Closed</span></li>
                              </ul>
                           </div>
                           <div className="h4footer-social">
                              <ul className="list-inline">
                                 <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                 <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                 <li><a href="#"><i className="fab fa-google"></i></a></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="footer-bottom pt-25 pb-20">
               <div className="container">
                  <div className="row">
                     <div className="col-xl-12">
                        <div className="footer-copyright footer-copyright-3 text-center">
                           <p>Copyright by@ BasicTheme - 2022</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
      </>
   );
};

export default HomeFourFooter;