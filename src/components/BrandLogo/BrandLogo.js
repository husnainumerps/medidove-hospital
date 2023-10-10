import React from 'react';

const BrandLogo = ({imagePath}) => {
    return (
        <>
            <div className="single-brand">
                <img src={`img/${imagePath}.png`} alt=""/>
            </div>

        </>
    );
};

export default BrandLogo;