import React from 'react';
import { Link } from 'react-router-dom';

const AboutSingleAnalysis = () => {
    return (
        <>
            <div className="row">
                <div className="col-xl-6 col-lg-8">
                    <div className="section-title pos-rel mb-40">
                        <div className="section-text section-text-white section-text-green pos-rel">
                            <h5>Improve your experience.</h5>
                            <h1 className="white-color">Professionals We Care About You.</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur.</p>
                        </div>
                    </div>
                    <div className="section-button section-button-left mb-30">
                        <Link to="/contact" className="primary_btn btn-icon ml-0"><span>+</span>Make Appointment</Link>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-4">
                    <div className="analysis-chart mb-30">
                        <img src="img/analysis/chart.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutSingleAnalysis;