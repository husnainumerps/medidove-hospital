import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/Shared/Footer';
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader';
import BlogThreeColumnArea from './BlogThreeColumnArea/BlogThreeColumnArea';

const BlogThreeColumn = () => {
   return (
      <>
         <HomeHeader/>
         <CommonPageHeader title="Blog 3 Column" subtitle="Blog" />
         <BlogThreeColumnArea/>
         <Footer/>
      </>
   );
};

export default BlogThreeColumn;