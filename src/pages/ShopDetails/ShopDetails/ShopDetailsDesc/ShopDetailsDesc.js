import React from 'react';

const ShopDetailsDesc = () => {
   return (
      <>
         <section className="product-desc-area pb-80">
            <div className="container">
               <div className="row">
                  <div className="col-12">
                     <div className="bakix-details-tab">
                        <ul className="nav text-center justify-content-center pb-30 mb-50" id="myTab" role="tablist">
                           <li className="nav-item">
                              <a className="nav-link active" id="desc-tab" data-bs-toggle="tab" href="#id-desc" role="tab"
                                 aria-controls="home" aria-selected="true">Description </a>
                           </li>
                           <li className="nav-item">
                              <a className="nav-link" id="id-add-in" data-bs-toggle="tab" href="#id-add" role="tab"
                                 aria-controls="profile" aria-selected="false">Additional Information</a>
                           </li>
                           <li className="nav-item">
                              <a className="nav-link" id="id-r" data-bs-toggle="tab" href="#id-rev" role="tab"
                                 aria-controls="profile" aria-selected="false">Reviews(10)</a>
                           </li>
                        </ul>
                     </div>
                     <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="id-desc" role="tabpanel" aria-labelledby="desc-tab">
                           <div className="event-text mb-40">
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                 incididunt ut labore et dolore magna
                                 aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                 ut aliquip ex ea commodo consequat.
                                 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                 fugiat nulla pariatur. Excepteur sint
                                 occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                                 id est laborum. Sed ut perspiciatis
                                 unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                                 totam rem aperiam, eaque ipsa quae ab
                                 illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                 Nemo enim ipsam voluptatem quia
                                 voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
                                 eos qui ratione voluptatem sequi
                                 nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                                 consectetur, adipisci velit, sed quia non
                                 numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                                 voluptatem.</p>
                              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                 deserunt mollit anim id est laborum. Sed ut
                                 perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                 laudantium, totam rem aperiam, eaque
                                 ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                                 sunt explicabo. Nemo enim ipsam voluptatem
                                 quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                                 dolores eos qui ratione voluptatem sequi
                                 nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                                 consectetur, adipisci velit, sed quia non
                                 numquam eius modi tempora.</p>
                           </div>
                        </div>
                        <div className="tab-pane fade" id="id-add" role="tabpanel" aria-labelledby="id-add-in">
                           <div className="additional-info">
                              <div className="table-responsive">
                                 <h4>Additional information</h4>
                                 <table className="table">
                                    <tbody>
                                       <tr>
                                          <th>Weight</th>
                                          <td className="product_weight">1.4 oz</td>
                                       </tr>
                                       <tr>
                                          <th>Dimensions</th>
                                          <td className="product_dimensions">62 × 56 × 12 in</td>
                                       </tr>
                                       <tr>
                                          <th>Size</th>
                                          <td className="product_dimensions">XL, XXL, LG, SM, MD</td>
                                       </tr>
                                    </tbody>
                                 </table>
                              </div>
                           </div>
                        </div>
                        <div className="tab-pane fade" id="id-rev" role="tabpanel" aria-labelledby="id-r">
                           <div className="additional-info">
                              <div className="event-text mb-40">
                                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                    ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                    fugiat nulla pariatur. Excepteur sint
                                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                                    id est laborum. Sed ut perspiciatis
                                    unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                                    totam rem aperiam, eaque ipsa quae ab
                                    illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                    Nemo enim ipsam voluptatem quia
                                    voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
                                    eos qui ratione voluptatem sequi
                                    nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                                    consectetur, adipisci velit, sed quia non
                                    numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                                    voluptatem.</p>
                                 <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum. Sed ut
                                    perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                    laudantium, totam rem aperiam, eaque
                                    ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                                    sunt explicabo. Nemo enim ipsam voluptatem
                                    quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                                    dolores eos qui ratione voluptatem sequi
                                    nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                                    consectetur, adipisci velit, sed quia non
                                    numquam eius modi tempora.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default ShopDetailsDesc;