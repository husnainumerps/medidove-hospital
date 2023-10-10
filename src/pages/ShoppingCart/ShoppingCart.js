import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/Shared/Footer';
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader';
import ShoppingCartArea from './ShoppongCartArea/ShoppingCartArea';

const ShoppingCart = () => {
    return (
        <>
            <HomeHeader/>
            <CommonPageHeader title="Shopping Cart" subtitle="Shopping Cart" />
            <ShoppingCartArea/>
            <Footer/>
        </>
    );
};

export default ShoppingCart;