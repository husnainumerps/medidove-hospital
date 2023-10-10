import React from 'react';
import HomeFourAbout from './HomeFourAbout/HomeFourAbout';
import HomeFourAppoinment from './HomeFourAppoinment/HomeFourAppoinment';
import HomeFourBlogs from './HomeFourBlogs/HomeFourBlogs';
import HomeFourBrands from './HomeFourBrands/HomeFourBrands';
import HomeFourCounterGallery from './HomeFourCounterGallery/HomeFourCounterGallery';
import HomeFourFact from './HomeFourFact/HomeFourFact';
import HomeFourFooter from './HomeFourFooter/HomeFourFooter';
import HomeFourHeroArea from './HomeFourHeroArea/HomeFourHeroArea';
import HomeFourHiring from './HomeFourHiring/HomeFourHiring';
import HomeFourHowWorks from './HomeFourHowWorks/HomeFourHowWorks';
import HomeFourNavBar from './HomeFourNavBar/HomeFourNavBar';
import HomeFourPhotoGallery from './HomeFourPhotoGallery/HomeFourPhotoGallery';
import HomeFourServices from './HomeFourServices/HomeFourServices';
import HomeFourTeams from './HomeFourTeams/HomeFourTeams';
import HomeFourTestimonials from './HomeFourTestimonials/HomeFourTestimonials';

const HomeFour = () => {
    return (
        <>
            <HomeFourNavBar/>
            <HomeFourHeroArea/>
            <HomeFourAbout/>
            <HomeFourServices/>
            <HomeFourTeams/>
            <HomeFourAppoinment/>
            <HomeFourFact/>
            <HomeFourHiring/>
            <HomeFourHowWorks/>
            <HomeFourTestimonials/>
            <HomeFourPhotoGallery/>
            <HomeFourCounterGallery/>
            <HomeFourBlogs/>
            <HomeFourBrands/>
            <HomeFourFooter/>
        </>
    );
};

export default HomeFour;