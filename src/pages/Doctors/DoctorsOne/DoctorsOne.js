import React from 'react';
import CommonPageHeader from '../../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../../components/Shared/Footer';
import HomeFact from '../../Home/Home/HomeFact/HomeFact';
import HomeHeader from '../../Home/Home/HomeHeader/HomeHeader';
import CounterArea from './CounterArea/CounterArea';
import DoctorOneTeamArea from './DoctorOneTeamArea/DoctorOneTeamArea';

const DoctorsOne = () => {
    return (
        <>
            <HomeHeader/>
            <CommonPageHeader title="Doctor 01" subtitle="Doctor" />
            <DoctorOneTeamArea/>
            <HomeFact/>
            <CounterArea/>
            <Footer/>
        </>
    );
};

export default DoctorsOne;