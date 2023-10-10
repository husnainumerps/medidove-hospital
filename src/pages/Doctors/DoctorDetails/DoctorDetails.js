import React from 'react';
import CommonPageHeader from '../../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../../components/Shared/Footer';
import HomeHeader from '../../Home/Home/HomeHeader/HomeHeader';
import DoctorDetailsArea from './DoctorDetailsArea/DoctorDetailsArea';

const DoctorDetails = () => {
    return (
        <>
            <HomeHeader/>
            <CommonPageHeader title="Doctor Details" subtitle="Details" />
            <DoctorDetailsArea/>
            <Footer/>
        </>
    );
};

export default DoctorDetails;