import React from 'react';
import HomeTwoAbout from './HomeTwoAbout/HomeTwoAbout';
import HomeTwoAppoinmentArea from './HomeTwoAppoinmentArea/HomeTwoAppoinmentArea';
import HomeTwoBlogs from './HomeTwoBlogs/HomeTwoBlogs';
import HomeTwoCounter from './HomeTwoCounter/HomeTwoCounter';
import HomeTwoFooter from './HomeTwoFooter/HomeTwoFooter';
import HomeTwoHeroSection from './HomeTwoHeader/HomeTwoHeroSection';
import HomeTwoMissionArea from './HomeTwoMissionArea/HomeTwoMissionArea';
import HomeTwoNavBar from './HomeTwoNavBar/HomeTwoNavBar';
import HomeTwoNewsLetter from './HomeTwoNewsLetter/HomeTwoNewsLetter';
import HomeTwoServicesArea from './HomeTwoServicesArea/HomeTwoServicesArea';
import HomeTwoTeamArea from './HomeTwoTeamArea/HomeTwoTeamArea';
import HomeTwoTestimonials from './HomeTwoTestimonials/HomeTwoTestimonials';

const HomeTwo = () => {
    return (
        <>
            <HomeTwoNavBar/>
            <HomeTwoHeroSection/>
            <HomeTwoAbout/>
            <HomeTwoMissionArea/>
            <HomeTwoCounter/>
            <HomeTwoAppoinmentArea/>
            <HomeTwoServicesArea/>
            <HomeTwoTestimonials/>
            <HomeTwoNewsLetter/>
            <HomeTwoTeamArea/>
            <HomeTwoBlogs/>
            <HomeTwoFooter/>
        </>
    );
};

export default HomeTwo;