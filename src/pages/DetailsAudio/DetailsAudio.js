import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/Shared/Footer';
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader';
import DetailsAudioArea from './DetailsAudioArea/DetailsAudioArea';

const DetailsAudio = () => {
    return (
        <>
            <HomeHeader/>
            <CommonPageHeader title="Blog Details Audio" subtitle="Blog" />
            <DetailsAudioArea/>
            <Footer/>
        </>
    );
};

export default DetailsAudio;