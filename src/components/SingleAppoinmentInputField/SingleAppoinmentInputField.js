import React from 'react';

const SingleAppoinmentInputField = ({placeholderText,icon}) => {
    return (
        <>
            <div className="col-lg-6">
                <div className="h4appoinment-input pos-rel mb-45">
                    <input type="text" placeholder={placeholderText} />
                    <i className="h4input-icon"><i className={icon}></i></i>
                </div>
            </div>
        </>
    );
};

export default SingleAppoinmentInputField;