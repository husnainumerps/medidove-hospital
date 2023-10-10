import React from 'react';
import HomeFourFiveNavBar from '../../components/Shared/HomeFourFiveNavBar/HomeFourFiveNavBar';
import HomeFourAppoinment from '../HomeFour/HomeFourAppoinment/HomeFourAppoinment';
import HomeFourBlogs from '../HomeFour/HomeFourBlogs/HomeFourBlogs';
import HomeFourBrands from '../HomeFour/HomeFourBrands/HomeFourBrands';
import HomeFourFact from '../HomeFour/HomeFourFact/HomeFourFact';
import HomeFourFooter from '../HomeFour/HomeFourFooter/HomeFourFooter';
import HomeFourTestimonials from '../HomeFour/HomeFourTestimonials/HomeFourTestimonials';
import HomeFiveAbout from './HomeFiveAbout/HomeFiveAbout';
import HomeFiveFacts from './HomeFiveFacts/HomeFiveFacts';
import HomeFiveGallery from './HomeFiveGallery/HomeFiveGallery';
import HomeFiveHeroSlider from './HomeFiveHeroSlider/HomeFiveHeroSlider';
import HomeFiveHowWorks from './HomeFiveHowWorks/HomeFiveHowWorks';
import HomeFiveMedicalTab from './HomeFiveMedicalTab/HomeFiveMedicalTab';
import HomeFiveRoutineArea from './HomeFiveRoutineArea/HomeFiveRoutineArea';
import HomeFiveServices from './HomeFiveServices/HomeFiveServices';
import HomeFiveTeams from './HomeFiveTeams/HomeFiveTeams';

const HomeFive = () => {
    return (
        <>
            <HomeFourFiveNavBar />
            <HomeFiveHeroSlider/>
            <HomeFiveAbout/>
            <HomeFiveServices/>
            <HomeFiveTeams/>
            <HomeFiveRoutineArea/>
            <HomeFiveGallery/>
            <HomeFourAppoinment/>
            <HomeFourFact/>
            <HomeFiveMedicalTab/>
            <HomeFiveHowWorks/>
            <HomeFourTestimonials/>
            <HomeFiveFacts/>
            <HomeFourBlogs/>
            <HomeFourBrands/>
            <HomeFourFooter/>
        </>
    );
};

export default HomeFive;