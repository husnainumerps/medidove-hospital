import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/Shared/Footer';
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader';
import BlogTwoArea from './BlogTwoArea/BlogTwoArea';

const BlogTwoColumn = () => {
    return (
        <>
            <HomeHeader/>
            <CommonPageHeader title="Blog 2 Column" subtitle="Blog" />
            <BlogTwoArea/>
            <Footer/>
        </>
    );
};

export default BlogTwoColumn;