import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/Shared/Footer';
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader';
import RegisteArea from './RegisteArea/RegisteArea';

const Register = () => {
    return (
        <>
            <HomeHeader/>
            <CommonPageHeader title="Register Page" subtitle="Register" />
            <RegisteArea/>
            <Footer/>
        </>
    );
};

export default Register;