import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/Shared/Footer';
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader';
import DetailsLeftSideBarArea from './DetailsLeftSideBarArea/DetailsLeftSideBarArea';

const DetailsLeftSideBar = () => {
    return (
        <>
            <HomeHeader/>
            <CommonPageHeader title="Blog Details Left Sidebar" subtitle="Blog" />
            <DetailsLeftSideBarArea/>
            <Footer/>
        </>
    );
};

export default DetailsLeftSideBar;