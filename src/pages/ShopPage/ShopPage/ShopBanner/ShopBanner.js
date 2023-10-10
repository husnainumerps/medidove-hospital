import React from 'react';
import SingleSecondShop from '../../../../components/SingleSecondShop/SingleSecondShop';
import SingleShop from '../../../../components/SingleShop/SingleShop';

const ShopBanner = () => {
   return (
      <>
         <section className="shop-banner-area pt-120 pb-120">
            <div className="container">
               <div className="row mt-20">
                  <div className="col-xl-4 col-lg-5 col-md-6">
                     <div className="product-showing mb-40">
                        <p>Showing 1–22 of 32 results</p>
                     </div>
                  </div>
                  <div className="col-xl-8 col-lg-7 col-md-6">
                     <div className="shop-tab f-right">
                        <ul className="nav text-center" id="myTab" role="tablist">
                           <li className="nav-item">
                              <a className="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab"
                                 aria-controls="home" aria-selected="true"><i className="fas fa-th-large"></i> </a>
                           </li>
                           <li className="nav-item">
                              <a className="nav-link" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab"
                                 aria-controls="profile" aria-selected="false"><i className="fas fa-list-ul"></i></a>
                           </li>
                        </ul>
                     </div>
                     <div className="pro-filter mb-40 f-right">
                        <form action="#">
                           <select name="pro-filter" id="pro-filter">
                              <option defaultValue="1">Shop By </option>
                              <option defaultValue="2">Top Sales </option>
                              <option defaultValue="3">New Product </option>
                              <option defaultValue="4">A to Z Product </option>
                           </select>
                        </form>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-12">
                     <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                           <div className="row">

                              <SingleShop image="1" name="Cloths" title="Medidove Product" />
                              <SingleShop image="2" name="Cloths" title="Legend Product" />
                              <SingleShop image="3" name="Table" title="Akari Product" />
                              <SingleShop image="4" name="Chair" title="Bakari Product" />
                              <SingleShop image="5" name="Cloths" title="Romada Product" />
                              <SingleShop image="6" name="Light" title="Sikkar Product" />
                              <SingleShop image="7" name="Headphone" title="Minners Product" />
                              <SingleShop image="8" name="table" title="Dolando Product" />
                              <SingleShop image="9" name="Cloths" title="Romada Product" />


                           </div>
                        </div>
                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                           <div className="row">
                              <SingleSecondShop image="2" />
                           </div>
                           <div className="row">
                              <SingleSecondShop image="3" />
                           </div>
                           <div className="row">
                              <SingleSecondShop image="4" />
                           </div>
                           <div className="row">
                              <SingleSecondShop image="5" />
                           </div>
                           <div className="row">
                              <SingleSecondShop image="6" />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-12">
                     <div className="basic-pagination basic-pagination-2 text-center mt-20">
                        <ul>
                           <li><a href="#"><i className="fas fa-angle-double-left"></i></a></li>
                           <li><a href="#">01</a></li>
                           <li><a href="#">02</a></li>
                           <li><a href="#">03</a></li>
                           <li><a href="#"><i className="fas fa-ellipsis-h"></i></a></li>
                           <li><a href="#"><i className="fas fa-angle-double-right"></i></a></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default ShopBanner;