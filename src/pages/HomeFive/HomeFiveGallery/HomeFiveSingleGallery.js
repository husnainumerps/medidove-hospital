import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import { Link } from 'react-router-dom';

const HomeFiveSingleGallery = ({ gallery,galleryData,index }) => {
   const {img} = gallery;
   const [photoIndex, setPhotoIndex] = useState(index);
   const [open, setOpen] = useState(false);
   const lightboxImages = galleryData.map(img => {
      <div key={img.id}></div>
      return img.img
   })
   const images = lightboxImages;
   return (
      <>
         {open && (
            <Lightbox
               mainSrc={images[photoIndex]}
               nextSrc={images[(photoIndex + 1) % images.length]}
               prevSrc={images[(photoIndex + images.length - 1) % images.length]}
               onCloseRequest={() => setOpen(false)}
               onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
               onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
            />
         )}

         <div className="col-lg-4 col-md-6 grid-gallery">
            <div className="h5gallery__wrapper pos-rel text-center mb-30">
               <div className="h5gallery-thumb">
                  <img className="img" src={img} alt="" />
               </div>
               <div className="h5gallery-content">
                  <button className="popup-image" onClick={()=> setOpen(true)}>
                     <i onClick={() => setPhotoIndex(index)} className="fal fa-plus"></i>
                  </button>
                  <h4 className="white-color"><Link to="/servicesDetails">Dental Services</Link></h4>
                  <span><Link to="/services">medical</Link> . <Link to="/services">Dental</Link></span>
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeFiveSingleGallery;