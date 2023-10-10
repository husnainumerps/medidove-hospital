import React from 'react';
import CommonPageHeader from '../../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../../components/Shared/Footer';
import HomeHeader from '../../Home/Home/HomeHeader/HomeHeader';
import ShopBanner from './ShopBanner/ShopBanner';

const ShopPage = () => {
    return (
        <>
            <HomeHeader/>
            <CommonPageHeader title="Shop Page" subtitle="Shop" />
            <ShopBanner/>
            <Footer/>
        </>
    );
};

export default ShopPage;