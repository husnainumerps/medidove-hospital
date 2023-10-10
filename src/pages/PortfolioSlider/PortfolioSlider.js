import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/Shared/Footer';
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader';
import PortfolioSliderArea from './PortfolioSliderArea/PortfolioSliderArea';

const PortfolioSlider = () => {
    return (
        <>
            <HomeHeader/>
            <CommonPageHeader title="Portfolio Slider" subtitle="Portfolio" />
            <PortfolioSliderArea/>
            <Footer/>
        </>
    );
};

export default PortfolioSlider;