import React from 'react';
import HomeFourSingleCounterGallery from '../../../components/HomeFourSingleCounterGallery/HomeFourSingleCounterGallery';
import VideoPopup from '../../../components/VideoPopup/VideoPopup';
import useGlobalContext from '../../../hooks/useGlobalContext';

const HomeFourCounterGallery = () => {
   const {setIsOpen} = useGlobalContext();
   return (
      <>
         <VideoPopup videoId="WE1fSnXtXDs" />

         <div className="fact gray-bg">
            <div className="container-fluid p-0">
               <div className="row g-0 d-flex align-items-center">
                  <div className="col-xl-5">
                     <div className="h6fact-wrapper pt-30">
                        <div className="row">

                           <HomeFourSingleCounterGallery icon='1' color="pink" colorTwo="pink"
                              number="3624" title="Medical Branch" />
                           <HomeFourSingleCounterGallery icon='2' color="green" colorTwo="green"
                              number="1230" title="MBBS Doctors" />
                           <HomeFourSingleCounterGallery icon='3' color="green" colorTwo="green"
                              number="7620" title="Local Partners" />
                           <HomeFourSingleCounterGallery icon='4' color="pink" colorTwo="pink"
                              number="2430" title="Experience Nurse" />

                        </div>
                     </div>
                  </div>
                  <div className="col-xl-7">
                     <div className="h4facts-thumbbox pos-rel text-end">
                        <div className="h4facts-thumb">
                           <img src="img/home4/fact/facti_right_thumb.jpg" alt=""/>
                              <button onClick={()=> setIsOpen(true)} className="h4facts-playicon popup-video">
                                 <i><img src="img/home4/fact/play-icon.png" alt=""/></i></button>
                              <i className="h4facts-brandicon"><img src="img/home4/fact/brand__logo__icon.png" alt=""/></i>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeFourCounterGallery;