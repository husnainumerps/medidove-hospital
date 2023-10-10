import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth'

const CheckoutCouponArea = () => {
   const [show,setShow] = useState(false);
   const [couponShow, setCouponShow] = useState(false);
   const { passwordResetWithEmail} = useAuth();
   return (
      <>
         <section className="coupon-area pt-100 pb-30">
            <div className="container">
               <div className="row">
                  <div className="col-md-6">
                     <div className="coupon-accordion">
                        {/* <!-- ACCORDION START --> */}
                        <h3>Returning customer? <span onClick={() => setShow(!show)} id="showlogin">Click here to login</span></h3>
                       {show && <div id="checkout-login" >
                           <div className="coupon-info">
                              <p className="coupon-text">Quisque gravida turpis sit amet nulla posuere lacinia. Cras sed est
                                 sit amet ipsum luctus.</p>
                              <form action="#">
                                 <p className="form-row-first">
                                    <label>Username or email <span className="required">*</span></label>
                                    <input type="text" />
                                 </p>
                                 <p className="form-row-last">
                                    <label>Password <span className="required">*</span></label>
                                    <input type="text" />
                                 </p>
                                 <p className="form-row">
                                    <Link to="/login"><button className="primary_btn theme-btn" type="button">Login</button></Link>
                                    <label>
                                       <input type="checkbox" className='me-2' />
                                       Remember me
                                    </label>
                                 </p>
                                 <p className="lost-password">
                                    <button onClick={passwordResetWithEmail}>Lost your password?</button>
                                 </p>
                              </form>
                           </div>
                        </div>}
                        {/* <!-- ACCORDION END --> */}
                     </div>
                  </div>
                  <div className="col-md-6">
                     <div className="coupon-accordion">
                        {/* <!-- ACCORDION START --> */}
                        <h3>Have a coupon? <span onClick={() => setCouponShow(!couponShow)} id="showcoupon">Click here to enter your code</span></h3>
                        {couponShow && <div id="checkout_coupon">
                           <div className="coupon-info">
                              <form action="#">
                                 <p className="checkout-coupon">
                                    <input type="text" placeholder="Coupon Code" />
                                    <button className="primary_btn theme-btn" type="button">Apply Coupon</button>
                                 </p>
                              </form>
                           </div>
                        </div>}
                        {/* <!-- ACCORDION END --> */}
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default CheckoutCouponArea;