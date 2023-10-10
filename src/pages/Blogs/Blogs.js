import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/Shared/Footer';
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader';
import BlogsArea from './BlogsArea/BlogsArea';

const Blogs = () => {
   return (
      <>
         <HomeHeader/>
         <CommonPageHeader title="Blog Standard" subtitle="Blog" />
         <BlogsArea/>
         <Footer/>
      </>
   );
};

export default Blogs;