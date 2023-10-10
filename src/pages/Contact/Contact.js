import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/Shared/Footer';
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader';
import ContactArea from './ContactArea/ContactArea';
import ContactFormArea from './ContactFormArea/ContactFormArea';
import ContactMap from './ContactMap/ContactMap';

const Contact = () => {
    return (
        <>
            <HomeHeader/>
            <CommonPageHeader title="Contact Us" subtitle="Contact" />
            <ContactArea/>
            <ContactFormArea/>
            <ContactMap/>
            <Footer/>
        </>
    );
};

export default Contact;