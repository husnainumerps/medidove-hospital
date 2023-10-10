import React from 'react';
import { Link } from 'react-router-dom';

const HomeThreeHiring = ({ btn_text, h4hireText, title = 'About Us', pinkColor}) => {
    return (
        <>
            <div className={`hire-text hire-text-2 ${h4hireText && h4hireText}`}>
                <div className="about-title mb-20">
                    <h5 className={`${pinkColor && pinkColor}`}>{title}</h5>
                    <h1>Short Story About MediDove Clinic.</h1>
                </div>
                <div className="about-text">
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                        officia.</p>
                </div>
                <ul className="professinals-list pt-10 pb-20">
                    <li>
                        <i className="fa fa-check"></i>
                        Ut enim ad minim veniam, quis nostrud exercit.
                    </li>
                    <li>
                        <i className="fa fa-check"></i>
                        Ut enim ad minim veniam, quis nostrud exercit.
                    </li>
                    <li>
                        <i className="fa fa-check"></i>
                        Ut enim ad minim veniam, quis nostrud exercit.
                    </li>
                    <li>
                        <i className="fa fa-check"></i>
                        Ut enim ad minim veniam, quis nostrud exercit.
                    </li>
                </ul>
                <div className="hiring-button">
                    <Link to="/contact"
                        className="primary_btn btn-icon btn-icon-green ml-0"><span>+</span>{btn_text}</Link>
                </div>
            </div>
        </>
    );
};

export default HomeThreeHiring;