import React from 'react';
import { Link } from 'react-router-dom';

const HomeFiveAbout = () => {
   const aboutData = [
      {
         id: 1,
         themeBg: 'theme-bg',
         bgIcon: 'services_bg_icon1.png',
         img: 'h5services__icon1.png',
         btnText: 'conatct us',
         url:'/contact'
      },
      {
         id: 2,
         themeBg: 'theme-bg2',
         bgIcon: 'services_bg_icon2.png',
         img: 'h5services__icon2.png',
         btnText: 'read more',
         url:'/about'
      },
   ]
   return (
      <>
         <section className="about-area pt-130 pb-100">
            <div className="container">
               <div className="row">
                  <div className="col-lg-10 offset-lg-1">
                     <div className="about-title text-center mb-60">
                        <h5 className="pink-color">MediDove help increase your readers.</h5>
                        <h1>25+ Years Of Since We Provide Medical Serving</h1>
                     </div>
                  </div>
               </div>
               <div className="row g-0">
                  {
                     aboutData.map((about, index) => {
                        const { themeBg, bgIcon, img, btnText,url } = about;
                        return (
                           <div key={index} className="col-lg-4 mb-30">
                              <div className={`h5services-wrapper ${themeBg}`}>
                                 <i className="h5sicon-bg"><img src={`img/icon/${bgIcon}`} alt="icon" /></i>
                                 <div className="h5services-content">
                                    <i className="h5services-icon"><img src={`img/icon/${img}`} alt="" /></i>
                                    <h3 className="white-color h5services-title">Energercy Case</h3>
                                    <p>Must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and will give complete</p>
                                    <Link to={url} className="green-color text-uppercase f-500"><span className="plus">+</span><span className="link">{btnText}</span></Link>
                                 </div>
                              </div>
                           </div>
                        )
                     })
                  }

                  <div className="col-lg-4 mb-30">
                     <div className="h5services-wrapper pink-bg">
                        <i className="h5sicon-bg"><img src="img/icon/services_bg_icon3.png" alt="icon" /></i>
                        <div className="h5services-content">
                           <i className="h5services-icon"><img src="img/icon/h5services__icon3.png" alt="" /></i>
                           <h3 className="white-color h5services-title">Opening Hours</h3>
                           <ul className="h5services-events">
                              <li className="white-color f-500">Mon - Friday <span>08:00 am - 09:00 pm</span></li>
                              <li className="white-color f-500">Mon - Friday <span>05:00 pm - 08:00 pm</span></li>
                           </ul>
                           <ul className="h5services-events h5sclose-days">
                              <li className="white-color f-500">Sunday <span>Closed</span></li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeFiveAbout;