import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/Shared/Footer';
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader';
import DetailsVideoArea from './DetailsVideoArea/DetailsVideoArea';

const DetailsVideo = () => {
    return (
        <>
            <HomeHeader/>
            <CommonPageHeader title="Blog Details Video" subtitle="Blog" />
            <DetailsVideoArea/>
            <Footer/>
        </>
    );
};

export default DetailsVideo;