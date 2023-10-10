import React from 'react';
import CommonPageHeader from '../../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../../components/Shared/Footer';
import HomeFact from '../../Home/Home/HomeFact/HomeFact';
import HomeHeader from '../../Home/Home/HomeHeader/HomeHeader';
import CounterArea from '../DoctorsOne/CounterArea/CounterArea';
import DoctorsTwoTeamArea from './DoctorsTwoTeamArea/DoctorsTwoTeamArea';

const DoctorsTwo = () => {
    return (
        <>
            <HomeHeader/>
            <CommonPageHeader title="Doctor 02" subtitle="Doctor" />
            <DoctorsTwoTeamArea/>
            <HomeFact />
            <CounterArea/>
            <Footer/>
        </>
    );
};

export default DoctorsTwo;