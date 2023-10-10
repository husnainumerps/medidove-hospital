import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/Shared/Footer';
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader';
import BlogThreeColMasonryArea from './BlogThreeColMasonryArea/BlogThreeColMasonryArea';

const BlogThreeColMasonry = () => {
    return (
        <>
            <HomeHeader/>
            <CommonPageHeader title="Blog 3 Column Masonry" subtitle="Blog" />
            <BlogThreeColMasonryArea/>
            <Footer/>
        </>
    );
};

export default BlogThreeColMasonry;