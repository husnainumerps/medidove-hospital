import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../../components/Shared/Sidebar/Sidebar';
import useGlobalContext from '../../../hooks/useGlobalContext';

const HomeThreeNavBar = () => {
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const { stickyMenu } = useGlobalContext();
   return (
      <>
         <header>
            <div className={stickyMenu ? "sticky_menu top-bar-white top-bar-3 lg-pt-30 lg-pb-30 h3_topBar" :
            "top-bar-white top-bar-3 pt-30 pb-30 h3_topBar"}>
               <div className="container">
                  <div className={ "row align-items-center"}>
                     <div className="col-xl-4 col-lg-4 col-md-6 col-6">
                        <div className="logo logo-3 pos-rel">
                           <Link to="/"><img src="img/logo/logo-3.png" alt=""/></Link>
                        </div>
                     </div>
                     <div className='col-6 d-lg-none'>
                        <div onClick={handleShow} className="side-menu-icon d-lg-none text-end">
                           <button className="side-toggle border-0 bg-transparent">
                              <i className="fas fa-bars"></i> </button>
                        </div>
                     </div>
                     <div className="col-xl-8 col-lg-8 col-md-8 d-none d-lg-block">
                        <div className="header-lang f-right pos-rel d-none d-lg-block p-0">
                           <div className="lang-icon">
                              <img src="img/icon/lang.png" alt=""/>
                                 <span>EN<i className="fas fa-angle-down"></i></span>
                           </div>
                           <ul className="header-lang-list header-lang-list-3">
                              <li><a href="#">USA</a></li>
                              <li><a href="#">UK</a></li>
                              <li><a href="#">CA</a></li>
                              <li><a href="#">AU</a></li>
                           </ul>
                        </div>
                        <div className="header-cta-info header-cta-info-3 d-flex f-left">
                           <div className="header-cta-icon">
                              <img src="img/cta/message-icon.png" alt=""/>
                           </div>
                           <div className="header-cta-text">
                              <h5 className="theme-color">Email Address</h5>
                              <span className="primary-color">infomail@medidove.com</span>
                           </div>
                        </div>
                        <div className="header-cta-info header-cta-info-3 d-flex f-left">
                           <div className="header-cta-icon">
                              <img src="img/cta/phone-icon.png" alt=""/>
                           </div>
                           <div className="header-cta-text">
                              <h5 className="theme-color">Phone Number</h5>
                              <span className="primary-color">+87 (676) 6765 764</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className={stickyMenu ? "sticky_menu header-menu-area header-menu-blue theme-bg sticky_navBar_bg" :
         "header-menu-area header-menu-blue theme-bg h3_navBar"}>
               <div className="container">
                  <div className="row align-items-center">
                     <div className="col-xl-8 col-lg-8">
                        <div className="header__menu menu-dark">
                           <nav id="mobile-menu">
                              <ul>
                                 <li><Link to="/">Home +</Link>
                                    <ul className="submenu">
                                       <li><Link to="/">Home style 1</Link></li>
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
                              </ul>
                           </nav>
                        </div>

                     </div>
                     <div className="col-xl-4 col-lg-4">
                        <div className="header-right f-right">
                           <div className="header-social-icons f-right d-none d-lg-block p-0">
                              <ul>
                                 <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                 <li><a href="#"><i className="fab fa-behance"></i></a></li>
                                 <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                 <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                                 <li><a href="#"><i className="fab fa-pinterest"></i></a></li>
                                 <li className="header-menu-search">
                                    <a className="nav-search search-trigger" href="#"><i className="fas fa-search"></i></a>
                                 </li>
                              </ul>
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

export default HomeThreeNavBar;