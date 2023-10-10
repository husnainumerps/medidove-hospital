import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/Shared/Footer';
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader';
import BlogTwoColumnMasonryArea from './BlogTwoColumnMasonryArea/BlogTwoColumnMasonryArea';

const BlogTwoColumnMasonry = () => {
    return (
        <>
            <HomeHeader />
            <CommonPageHeader title="Blog 2 Column Masonry" subtitle="Blog" />
            <BlogTwoColumnMasonryArea/>
            <Footer/>
        </>
    );
};

export default BlogTwoColumnMasonry;