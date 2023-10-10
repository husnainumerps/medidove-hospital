import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/Shared/Footer';
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader';
import PortfolioTwoColumnGallery from './PortfolioTwoColumnGallery/PortfolioTwoColumnGallery';

const PortfolioTwoColumn = () => {
    return (
        <>
            <HomeHeader/>
            <CommonPageHeader title="Portfolio 2 Column" subtitle="Portfolio" />
            <PortfolioTwoColumnGallery/>
            <Footer/>
        </>
    );
};

export default PortfolioTwoColumn;