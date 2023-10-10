import React from 'react';
import BlogDetailsLeftSide from '../../../components/BlogDetailsLeftSide/BlogDetailsLeftSide';
import BlogDetailsRightSide from '../../../components/BlogDetailsRightSide/BlogDetailsRightSide';

const DetailsAudioArea = () => {
    return (
        <>
            <section className="blog-area pt-120 pb-80">
                <div className="container">
                    <div className="row">

                        <BlogDetailsLeftSide details_topBar={<div className="postbox__audio embed-responsive embed-responsive-16by9">
                            <iframe title='blog audio'
                                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/469608615&color=%23ff0000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" width={'100%'} height={450}></iframe>
                        </div>} />

                        <BlogDetailsRightSide />

                    </div>
                </div>
            </section>
        </>
    );
};

export default DetailsAudioArea;