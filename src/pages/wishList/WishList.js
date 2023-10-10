import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/Shared/Footer';
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader';
import WishListArea from './wishListArea/wishListArea';

const WishList = () => {
   return (
      <>
         <HomeHeader/>
         <CommonPageHeader title="Wishlist" subtitle="Wishlist" />
         <WishListArea/>
         <Footer/>
      </>
   );
};

export default WishList;