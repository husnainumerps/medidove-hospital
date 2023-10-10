import React from 'react';
import { Link } from 'react-router-dom';

const ShoppingCartArea = () => {
   return (
      <>
         <section className="cart-area pt-120 pb-120">
            <div className="container">
               <div className="row">
                  <div className="col-12">
                     <form action="#">
                        <div className="table-content table-responsive">
                           <table className="table">
                              <thead>
                                 <tr>
                                    <th className="product-thumbnail">Images</th>
                                    <th className="cart-product-name">Product</th>
                                    <th className="product-price">Unit Price</th>
                                    <th className="product-quantity">Quantity</th>
                                    <th className="product-subtotal">Total</th>
                                    <th className="product-remove">Remove</th>
                                 </tr>
                              </thead>
                              <tbody className='border-0'>
                                 <tr>
                                    <td className="product-thumbnail">
                                       <Link to="/shopDetails"><img src="img/shop/img1.jpg"
                                       alt=""/></Link></td>
                                    <td className="product-name"><Link to="/shopDetails">Bakix Furniture</Link></td>
                                    <td className="product-price"><span className="amount">$130.00</span></td>
                                    <td className="product-quantity">
                                       <div className="cart-plus-minus"><input type="text" defaultValue="1" /></div>
                                    </td>
                                    <td className="product-subtotal"><span className="amount">$130.00</span></td>
                                    <td className="product-remove"><a href="#"><i className="fa fa-times"></i></a></td>
                                 </tr>
                                 <tr>
                                    <td className="product-thumbnail"><Link to="/shopDetails"><img src="img/shop/img2.jpg"
                                       alt=""/></Link></td>
                                    <td className="product-name"><Link to="/shopDetails">Sujon Chair Set</Link></td>
                                    <td className="product-price"><span className="amount">$120.50</span></td>
                                    <td className="product-quantity">
                                       <div className="cart-plus-minus"><input type="text" defaultValue="1" /></div>
                                    </td>
                                    <td className="product-subtotal"><span className="amount">$120.50</span></td>
                                    <td className="product-remove"><a href="#"><i className="fa fa-times"></i></a></td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                        <div className="row">
                           <div className="col-12">
                              <div className="coupon-all">
                                 <div className="coupon">
                                    <input id="coupon_code" className="input-text" name="coupon_code" defaultValue=""
                                       placeholder="Coupon code" type="text"/>
                                    <button className="primary_btn theme-btn-2" name="apply_coupon" type="button">Apply
                                          coupon</button>
                                 </div>
                                 <div className="coupon2">
                                    <input className="primary_btn theme-btn" name="update_cart" defaultValue="Update cart" type="button"/>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="row">
                           <div className="col-md-5 ms-auto">
                              <div className="cart-page-total">
                                 <h2>Cart totals</h2>
                                 <ul className="mb-20">
                                    <li>Subtotal <span>$250.00</span></li>
                                    <li>Total <span>$250.00</span></li>
                                 </ul>
                                 <Link to="/checkout" className="primary_btn theme-btn">Proceed to checkout</Link>
                              </div>
                           </div>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default ShoppingCartArea;