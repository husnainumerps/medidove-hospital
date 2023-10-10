import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/Shared/Footer';
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader';
import BlogDetailsArea from './BlogDetailsArea/BlogDetailsArea';

const BlogDetails = () => {
   return (
      <>
         <HomeHeader/>
         <CommonPageHeader title="Blog Details" subtitle="Details" />
         <BlogDetailsArea/>
         <Footer/>
      </>
   );
};

export default BlogDetails;