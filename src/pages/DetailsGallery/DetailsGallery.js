import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/Shared/Footer';
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader';
import DetailsGalleryArea from './DetailsGalleryArea/DetailsGalleryArea';

const DetailsGallery = () => {
    return (
        <>
            <HomeHeader/>
            <CommonPageHeader title="Blog Details Gallery" subtitle="Blog" />
            <DetailsGalleryArea/>
            <Footer/>
        </>
    );
};

export default DetailsGallery;