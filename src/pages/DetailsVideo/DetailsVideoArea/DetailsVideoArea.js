import React, { useState } from 'react';
import BlogDetailsLeftSide from '../../../components/BlogDetailsLeftSide/BlogDetailsLeftSide';
import BlogDetailsRightSide from '../../../components/BlogDetailsRightSide/BlogDetailsRightSide';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';

const DetailsVideoArea = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen}
                videoId="oU_GUAWz52w" onClose={() => setOpen(false)} />

            <section className="blog-area pt-120 pb-80">
                <div className="container">
                    <div className="row">

                        <BlogDetailsLeftSide details_topBar={<div className="postbox__video mb-35">
                            <img src="img/blog/b3.jpg" alt="blog img"/>
                                <button onClick={() => setOpen(true)} className="popup-video video-btn"
                                href="https://www.youtube.com/watch?v=Y6MlVop80y0">
                                <i className="fas fa-play"></i></button>
                        </div>} />

                        <BlogDetailsRightSide />

                    </div>
                </div>
            </section>
        </>
    );
};

export default DetailsVideoArea;