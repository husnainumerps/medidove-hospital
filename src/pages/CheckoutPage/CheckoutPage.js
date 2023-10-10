import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/Shared/Footer';
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader';
import CheckoutArea from './CheckoutArea/CheckoutArea';
import CheckoutCouponArea from './CheckoutCouponArea/CheckoutCouponArea';

const CheckoutPage = () => {
   return (
      <>
         <HomeHeader/>
         <CommonPageHeader title="Checkout" subtitle="Checkout" />
         <CheckoutCouponArea/>
         <CheckoutArea/>
         <Footer/>
      </>
   );
};

export default CheckoutPage;