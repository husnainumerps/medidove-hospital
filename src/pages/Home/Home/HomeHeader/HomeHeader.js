import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../../../components/Shared/Sidebar/Sidebar';
import useGlobalContext from '../../../../hooks/useGlobalContext';

const HomeHeader = () => {
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const { stickyMenu } = useGlobalContext();
   return (
      <>
         <header>
            <div className="top-bar d-none d-md-block">
               <div className="container">
                  <div className="row d-flex align-items-center">
                     <div className="col-xl-6 offset-xl-1 col-lg-6 offset-lg-1 col-md-7 offset-md-1">
                        <div className="header-info">
                           <span><i className="fas fa-phone"></i> +1 800 833 9780</span>
                           <span><i className="fas fa-envelope"></i> info@example.com</span>
                        </div>
                     </div>
                     <div className="col-xl-5 col-lg-5 col-md-4">
                        <div className="header-top-right-btn f-right">
                           <Link to="/contact" className="primary_btn">Make Appointment</Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className={stickyMenu ? "header-menu-area sticky_menu" : "header-menu-area"}>
               <div className="container menu_wrapper">
                  <div className="row align-items-center">
                     <div className="col-xl-3 col-lg-3 col-md-6 col-6 d-flex align-items-center">
                        <div className="logo logo-circle pos-rel">
                           <Link to="/"><img src="img/logo/logo.png" alt="" /></Link>
                        </div>
                     </div>
                     <div className="col-xl-9 col-lg-9 col-md-6 col-6">
                        <div className="header-right f-right">
                           <div className="header-lang f-right pos-rel d-none d-lg-block">
                              <div className="lang-icon">
                                 <img src="img/icon/lang.png" alt=""/>
                                    <span>EN<i className="fas fa-angle-down"></i></span>
                              </div>
                              <ul className="header-lang-list">
                                 <li><a href="#">USA</a></li>
                                 <li><a href="#">UK</a></li>
                                 <li><a href="#">CA</a></li>
                                 <li><a href="#">AU</a></li>
                              </ul>
                           </div>
                           <div className="header-social-icons f-right d-none d-xl-block">
                              <ul>
                                 <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                 <li><a href="#"><i className="fab fa-behance"></i></a></li>
                                 <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                 <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                                 <li><a href="#"><i className="fab fa-pinterest"></i></a></li>
                              </ul>
                           </div>
                        </div>
                        <div className="header__menu f-right">
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

                        <div className="side-menu-icon d-lg-none text-end">
                           <button onClick={handleShow} className="side-toggle border-0 bg-transparent">
                              <i className="fas fa-bars"></i> </button>
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

export default HomeHeader;