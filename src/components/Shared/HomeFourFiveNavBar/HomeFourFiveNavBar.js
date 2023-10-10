import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useGlobalContext from '../../../hooks/useGlobalContext';
import Sidebar from '../Sidebar/Sidebar';

const HomeFourFiveNavBar = () => {
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const { stickyMenu } = useGlobalContext();
   return (
      <>
         <header>
            <div className="top-bar4 white-bg top-border d-none d-md-block pl-55 pr-55 pt-25 pb-25">
               <div className="container-fluid">
                  <div className="row d-flex align-items-center">
                     <div className="col-xl-6 col-lg-6">
                        <div className="header-info header-info4 p-0">
                           <span><i className="far fa-envelope-open"></i>infomail@medidove.com</span>
                           <span><i className="fal fa-phone"></i>+87 (676) 6765 764</span>
                           <span><i className="fal fa-clock"></i>Sun - Thuseday, 09:00 am - 08:00 pm</span>
                        </div>
                     </div>
                     <div className="col-xl-6 col-lg-6">
                        <div className="top4-right d-flex justify-content-end">
                           <div className="top4-menu">
                              <ul className="list-inline">
                                 <li><a className="need-help" href="#">Needs Help?</a></li>
                                 <li><a href="#">Setting & Privacy</a></li>
                                 <li><a href="#">Media</a></li>
                              </ul>
                           </div>
                           <div className="header-social-icons top4-social d-none d-xl-block">
                              <ul>
                                 <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                 <li><a href="#"><i className="fab fa-behance"></i></a></li>
                                 <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                 <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                                 <li><a href="#"><i className="fab fa-pinterest"></i></a></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* <!-- menu-area --> */}
            <div className={stickyMenu ? "sticky_menu header-menu-area menu-area4 pl-55 pr-55" :
         "header-menu-area menu-area4 pl-55 pr-55"}>
               <div className="container-fluid">
                  <div className="row">
                     <div className="col-xl-8 col-lg-12 col-md-12 d-flex align-items-center navbar__wrapper">
                        <div className="logo pos-rel">
                           <Link to="/"><img src="img/logo/logo-4.png" alt="MediDove" /></Link>
                        </div>
                        <div className="header__menu header__menu4 pl-60">
                           <nav id="mobile-menu">
                              <ul>
                                 <li><Link to="/">Home +</Link>
                                    <ul className="submenu">
                                       <li><Link to="/home">Home style 1</Link></li>
                                       <li><Link to="/homeTwo">Home style 2</Link></li>
                                       <li><Link to="/homeThree">Home style 3</Link></li>
                                       <li><Link to="/homeFour">Home style 4</Link></li>
                                       <li><Link to="/homeFive">Home style 5</Link></li>
                                    </ul>
                                 </li>
                                 <li><Link to="/services">Department +</Link>
                                    <ul className="submenu">
                                       <li><Link to="/services">Services 01</Link></li>
                                       <li><Link to="/servicesTwo">Services 02</Link></li>
                                       <li><Link to="/servicesDetails">Services Details</Link></li>
                                    </ul>
                                 </li>
                                 <li><Link to="/doctors">Doctors +</Link>
                                    <ul className="submenu">
                                       <li><Link to="/doctors">Doctors 01</Link></li>
                                       <li><Link to="/doctorsTwo">Doctors 02</Link></li>
                                       <li><Link to="/doctorDetails">Doctors Details</Link></li>
                                    </ul>
                                 </li>
                                 <li><Link to="/shop">Shop</Link>
                                    <ul className="submenu">
                                       <li><Link to="/shop">Shop Page</Link></li>
                                       <li><Link to="/shopDetails">Shop Details</Link></li>
                                       <li><Link to="/shoppingCart">Shopping Cart</Link></li>
                                       <li><Link to="/checkout">Checkout</Link></li>
                                       <li><Link to="/wishList">Wishlist</Link></li>
                                       <li><Link to="/login">Login</Link></li>
                                       <li><Link to="/register">Register</Link></li>
                                    </ul>
                                 </li>
                                 <li><Link to="/blogs">News +</Link>
                                    <ul className="submenu">
                                       <li><Link to="/blogs">Blog Right Sidebar</Link></li>
                                       <li><Link to="/blogLeftSideBar">Blog Left Sidebar</Link></li>
                                       <li><Link to="/blogNoSideBar">Blog No Sidebar</Link></li>
                                       <li><Link to="/blogTwoColumn">Blog 2 Column</Link></li>
                                       <li><Link to="/blogTwoMasonry">Blog 2 Col Masonry</Link></li>
                                       <li><Link to="/blogThreeColumn">Blog 3 Column</Link></li>
                                       <li><Link to="/blogThreeColMasonry">Blog 3 Col Masonry</Link></li>
                                       <li><Link to="/blogDetails">Blog Details</Link></li>
                                       <li><Link to="/blogDetailsLeftSidebar">Details Left Sidebar</Link></li>
                                       <li><Link to="/blogDetailsAudio">Details Audio</Link></li>
                                       <li><Link to="/blogDetailsVideo">Details Video</Link></li>
                                       <li><Link to="/blogDetailsGallery">Details Gallery</Link></li>
                                    </ul>
                                 </li>
                                 <li><a href="#">Pages +</a>
                                    <ul className="submenu">
                                       <li><Link to="/about">About</Link></li>
                                       <li><Link to="/appoinment">Appoinment</Link></li>
                                       <li><Link to="/portfolioTwoColumn">Portfolio 2 column</Link></li>
                                       <li><Link to="/portfolioThreeColumn">Portfolio 3 column</Link></li>
                                       <li><Link to="/portfolioSlider">Portfolio Slider</Link></li>
                                       <li><Link to="/contact">Contact</Link></li>
                                       <li><Link to="/notMatch">404 page</Link></li>
                                    </ul>
                                 </li>
                                 <li><a href="#"><i className="fal fa-search"></i></a></li>
                              </ul>
                           </nav>
                        </div>

                        <div onClick={handleShow} className="side-menu-icon d-lg-none text-end">
                           <button className="side-toggle border-0 bg-transparent">
                              <i className="fas fa-bars"></i> </button>
                        </div>

                     </div>
                     <div className="col-xl-4 col-lg-9 col-md-9 d-none d-xl-block">
                        <div className="header-right d-flex align-items-center justify-content-end">
                           <div className="header-lang pos-rel d-none d-lg-block">
                              <div className="lang-icon">
                                 <img src="img/icon/lang.png" alt="" />
                                 <span>EN<i className="fas fa-angle-down"></i></span>
                              </div>
                              <ul className="header-lang-list">
                                 <li><a href="#">USA</a></li>
                                 <li><a href="#">UK</a></li>
                                 <li><a href="#">CA</a></li>
                                 <li><a href="#">AU</a></li>
                              </ul>
                           </div>
                           <div className="header-button pl-50">
                              <Link to="/contact"
                                 className="primary_btn btn-icon ml-0" style={{ animationDelay: '0.6s' }} tabIndex="0">
                                 <span>+</span>Make Appointment</Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>

         <Sidebar show={show} handleClose={handleClose} />
      </>
   );
};

export default HomeFourFiveNavBar;