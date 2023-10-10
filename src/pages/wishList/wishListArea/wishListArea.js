import React from 'react';
import { Link } from 'react-router-dom';

const WishListArea = () => {
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
                              <tbody className="border-0">
                                 <tr>
                                    <td className="product-thumbnail">
                                       <Link to="/shopDetails"><img src="img/shop/img2.jpg"  alt=""/></Link></td>
                                    <td className="product-name"><Link to="/shopDetails">Bakix Furniture</Link></td>
                                    <td className="product-price"><span className="amount">$130.00</span></td>
                                    <td className="product-quantity">
                                       <button className="btn theme-btn-2" type="button">Add TO Cart</button>
                                    </td>
                                    <td className="product-subtotal"><span className="amount">$130.00</span></td>
                                    <td className="product-remove"><a href="#"><i className="fa fa-times"></i></a></td>
                                 </tr>
                                 <tr>
                                    <td className="product-thumbnail"><Link to="/shopDetails"><img src="img/shop/img4.jpg"
                                       alt=""/></Link></td>
                                    <td className="product-name"><Link to="/shopDetails">Sujon Chair Set</Link></td>
                                    <td className="product-price"><span className="amount">$120.50</span></td>
                                    <td className="product-quantity">
                                       <button className="btn theme-btn-2" type="button">Add TO Cart</button>
                                    </td>
                                    <td className="product-subtotal"><span className="amount">$120.50</span></td>
                                    <td className="product-remove"><a href="#"><i className="fa fa-times"></i></a></td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default WishListArea;