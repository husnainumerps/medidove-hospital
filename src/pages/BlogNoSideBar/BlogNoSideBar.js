import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader';
import BlogNoSideBarArea from './BlogNoSideBarArea/BlogNoSideBarArea';

const BlogNoSideBar = () => {
   return (
      <>
         <HomeHeader />
         <CommonPageHeader title="Blog No Sidebar" subtitle="Blog" />
         <BlogNoSideBarArea />
      </>
   );
};

export default BlogNoSideBar;