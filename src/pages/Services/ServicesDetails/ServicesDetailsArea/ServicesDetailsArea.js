import React from 'react';
import { Link } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ServicesDetailsArea = () => {
   const data = [
      {
         name: 'Page A',
         uv: 4000,
         pv: 2400,
         amt: 2400,
      },
      {
         name: 'Page B',
         uv: 3000,
         pv: 1398,
         amt: 2210,
      },
      {
         name: 'Page C',
         uv: 2000,
         pv: 9800,
         amt: 2290,
      },
      {
         name: 'Page D',
         uv: 2780,
         pv: 3908,
         amt: 2000,
      },
      {
         name: 'Page E',
         uv: 1890,
         pv: 4800,
         amt: 2181,
      },
      {
         name: 'Page F',
         uv: 2390,
         pv: 3800,
         amt: 2500,
      },
      {
         name: 'Page G',
         uv: 3490,
         pv: 4300,
         amt: 2100,
      },
   ];
   return (
      <>
         <div className="service-details-area pt-120 pb-100">
            <div className="container">
               <div className="row">
                  <div className="col-xl-7 col-lg-8">
                     <article className="service-details-box">
                        <div className="service-details-thumb mb-80">
                           <img className="img" src="img/services/service-details-thumb1.jpg" alt="" />
                        </div>
                        <div className="section-title pos-rel mb-45">
                           <div className="section-icon">
                              <img className="section-back-icon back-icon-left" src="img/section/section-back-icon-sky.png" alt="" />
                           </div>
                           <div className="section-text pos-rel">
                              <h5 className="green-color text-up-case">Dental Care</h5>
                              <h1>We are here to help when you need us.</h1>
                           </div>
                           <div className="section-line pos-rel">
                              <img src="img/shape/section-title-line.png" alt="" />
                           </div>
                        </div>
                        <div className="service-details-text mb-30">
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                              occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis
                              unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                              voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
                              nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
                              numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                              occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis
                              unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                        </div>
                        <div className="service-details-feature fix mb-35">
                           <div className="ser-fea-box f-left">
                              <div className="ser-fea-icon f-left">
                                 <img src="img/services/ser-fea-icon-1.png" alt="" />
                              </div>
                              <div className="ser-fea-list fix">
                                 <h3>Personal care</h3>
                                 <ul>
                                    <li><i className="fas fa-check"></i>Cillum dolore eu fugiat nulla.</li>
                                    <li><i className="fas fa-check"></i>Lorem ipsum dolor sit amet.</li>
                                    <li><i className="fas fa-check"></i>Consectetur adipisicing elit,</li>
                                    <li><i className="fas fa-check"></i>Sed do eiusmod tempor inci.</li>
                                 </ul>
                              </div>
                           </div>
                           <div className="ser-fea-box f-left me-0">
                              <div className="ser-fea-icon f-left">
                                 <img src="img/services/ser-fea-icon-2.png" alt="" />
                              </div>
                              <div className="ser-fea-list fix">
                                 <h3>Lifestyle support</h3>
                                 <ul>
                                    <li><i className="fas fa-check"></i>Didunt ut labore et dolore magna.</li>
                                    <li><i className="fas fa-check"></i>Aliqua. Ut enim ad minim veniam.</li>
                                    <li><i className="fas fa-check"></i>Quis nostrud exercitation ullamco.</li>
                                    <li><i className="fas fa-check"></i>Laboris nisi ut aliquip ex ea.</li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <div className="service-chart mb-55">
                           {/* <img src="img/services/service-chart.jpg" alt=""/> */}
                           <ResponsiveContainer width="100%" height={300}>
                              <AreaChart
                                 width={500}
                                 height={400}
                                 data={data}
                                 margin={{
                                    top: 10,
                                    right: 30,
                                    left: 0,
                                    bottom: 0,
                                 }}
                              >
                                 <CartesianGrid strokeDasharray="3 3" />
                                 <XAxis dataKey="name" />
                                 <YAxis />
                                 <Tooltip />
                                 <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
                                 <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                                 <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
                              </AreaChart>
                           </ResponsiveContainer>
                        </div>
                        <div className="service-doctors mb-55">
                           <img src="img/services/service-doctors.png" alt="" />
                        </div>
                        <div className="section-title pos-rel mb-50">
                           <div className="section-text pos-rel">
                              <h5 className="green-color text-up-case">download</h5>
                              <h1>Free Download Resources</h1>
                           </div>
                           <div className="section-line pos-rel">
                              <img src="img/shape/section-title-line.png" alt="" />
                           </div>
                        </div>
                        <div className="download-area">
                           <a className="download-box mb-20" href="#">
                              <div className="single-download-inner">
                                 <img src="img/icon/pdf.png" alt="" />
                                 <span>The Balanced Care Method Flyer.pdf</span>
                                 <span className="download-size">57KB</span>
                              </div>
                           </a>
                           <a className="download-box mb-20" href="#">
                              <div className="single-download-inner">
                                 <img src="img/icon/doc.png" alt="" />
                                 <span>Infomation sheet 2 2016-17.doc</span>
                                 <span className="download-size">87KB</span>
                              </div>
                           </a>
                           <a className="download-box mb-20" href="#">
                              <div className="single-download-inner">
                                 <img src="img/icon/zip.png" alt="" />
                                 <span>What_is_home_care_manual.zip</span>
                                 <span className="download-size">112KB</span>
                              </div>
                           </a>
                        </div>
                        <div className="testi-box text-center pos-rel mb-0">
                           <div className="testi-content testi-service-content pos-rel">
                              <div className="testi-quato-icon">
                                 <img src="img/testimonials/testi-quato-icon.png" alt="" />
                              </div>
                              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut
                                 perspiciatis unde omnis iste natus error sit voluptatem.</p>
                              <span></span>
                           </div>
                           <div className="testi-author">
                              <h2 className="testi-author-title">Rosalina D. Williamson</h2>
                              <span className="testi-author-desination">founder, uithemes</span>
                           </div>
                           <div className="test-author-icon mb-10">
                              <img src="img/testimonials/testi-author-icon.png" alt="" />
                           </div>
                        </div>
                     </article>
                  </div>
                  <div className="col-xl-5 col-lg-4">
                     <div className="service-widget mb-50">
                        <div className="widget-title-box mb-30">
                           <h3 className="widget-title">More Services</h3>
                        </div>
                        <div className="more-service-list">
                           <ul>
                              <li>
                                 <Link to="/services">
                                    <div className="more-service-icon"><img src="img/services/more-ser-1.png" alt="" /></div>
                                    <div className="more-service-title">Body Surgery</div>
                                 </Link>
                              </li>
                              <li>
                                 <Link to="/services">
                                    <div className="more-service-icon"><img src="img/services/more-ser-2.png" alt="" /></div>
                                    <div className="more-service-title">Dental Care</div>
                                 </Link>
                              </li>
                              <li>
                                 <Link to="/services">
                                    <div className="more-service-icon"><img src="img/services/more-ser-3.png" alt="" /></div>
                                    <div className="more-service-title">Eye Care</div>
                                 </Link>
                              </li>
                              <li>
                                 <Link to="/services">
                                    <div className="more-service-icon"><img src="img/services/more-ser-4.png" alt="" /></div>
                                    <div className="more-service-title">Blood cancer</div>
                                 </Link>
                              </li>
                              <li>
                                 <Link to="/services">
                                    <div className="more-service-icon"><img src="img/services/more-ser-5.png" alt="" /></div>
                                    <div className="more-service-title">Neurology Sargery</div>
                                 </Link>
                              </li>
                              <li>
                                 <Link to="/services">
                                    <div className="more-service-icon"><img src="img/services/more-ser-6.png" alt="" /></div>
                                    <div className="more-service-title">Allergic Issue</div>
                                 </Link>
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div className="service-widget mb-50">
                        <div className="widget-title-box mb-30">
                           <h3 className="widget-title">Get Some Advice?</h3>
                        </div>
                        <form className="service-contact-form" action="">
                           <div className="row">
                              <div className="col-xl-12">
                                 <div className="contact-input contact-icon contact-user mb-20">
                                    <input type="text" placeholder="Enter your name" />
                                 </div>
                              </div>
                              <div className="col-xl-12">
                                 <div className="contact-input contact-icon contact-mail mb-20">
                                    <input type="text" placeholder="Enter your email" />
                                 </div>
                              </div>
                              <div className="col-xl-12">
                                 <div className="contact-input contact-icon contact-hourglass">

                                    <select className="form-select select_style" aria-label="Default select example">
                                       <option defaultValue="Select type of care">Select type of care</option>
                                       <option defaultValue="1">Select type of care</option>
                                       <option defaultValue="2">Select type of care</option>
                                       <option defaultValue="2">Select type of care</option>
                                    </select>
                                 </div>
                              </div>
                           </div>
                        </form>
                        <div className="ser-form-btn text-center mt-40">
                           <a href="#" className="primary_btn btn-icon ml-0"
                              style={{ animationDelay: '0.6s' }}
                              tabIndex="0"><span>+</span>Request for call</a>
                        </div>
                     </div>
                     <div className="service-widget mb-50 border-0 p-0">
                        <div className="banner-widget">
                           <Link to="/contact">
                              <img src="img/services/services-banner.png" alt="" />
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default ServicesDetailsArea;