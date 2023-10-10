import React from 'react';
import Footer from '../../components/Shared/Footer';
import Hiring from './Hiring/Hiring';
import HomeThreeAboutArea from './HomeThreeAboutArea/HomeThreeAboutArea';
import HomeThreeBlogs from './HomeThreeBlogs/HomeThreeBlogs';
import HomeThreeBrandArea from './HomeThreeBrandArea/HomeThreeBrandArea';
import HomeThreeFactArea from './HomeThreeFactArea/HomeThreeFactArea';
import HomeThreeFaq from './HomeThreeFaq/HomeThreeFaq';
import HomeThreeHeroSection from './HomeThreeHeroSection/HomeThreeHeroSection';
import HomeThreeMembership from './HomeThreeMembership/HomeThreeMembership';
import HomeThreeNavBar from './HomeThreeNavBar/HomeThreeNavBar';
import HomeThreePricing from './HomeThreePricing/HomeThreePricing';
import HomeThreeServices from './HomeThreeServices/HomeThreeServices';
import HomeThreeTeams from './HomeThreeTeams/HomeThreeTeams';

const HomeThree = () => {
    return (
        <>
            <HomeThreeNavBar />
            <HomeThreeHeroSection />
            <HomeThreeAboutArea />
            <HomeThreeServices/>
            <HomeThreeFactArea/>
            <HomeThreeTeams/>
            <HomeThreeMembership/>
            <HomeThreeFaq/>
            <HomeThreePricing/>
            <Hiring/>
            <HomeThreeBrandArea/>
            <HomeThreeBlogs/>
            <Footer/>
        </>
    );
};

export default HomeThree;