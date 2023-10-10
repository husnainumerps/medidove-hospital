import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/Shared/Footer';
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader';
import BlogLeftSideBarArea from './BlogLeftSideBarArea/BlogLeftSideBarArea';

const BlogLeftSideBar = () => {
    return (
        <>
            <HomeHeader/>
            <CommonPageHeader title="Blog Left Sidebar" subtitle="Blog" />
            <BlogLeftSideBarArea/>
            <Footer/>
        </>
    );
};

export default BlogLeftSideBar;