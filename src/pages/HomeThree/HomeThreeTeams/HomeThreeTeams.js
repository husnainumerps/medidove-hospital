import React from 'react';
import DoctorsTwoSingleTeam from '../../../components/DoctorsTwoSingleTeam/DoctorsTwoSingleTeam';

const HomeThreeTeams = () => {
    return (
        <>
            <section className="team-area pt-115 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                            <div className="section-title text-center pos-rel mb-70">
                                <div className="section-icon">
                                    <img className="section-back-icon" src="img/section/section-back-icon.png" alt=""/>
                                </div>
                                <div className="section-text pos-rel">
                                    <h5>Our Team</h5>
                                    <h1>A Professional & Care Provider</h1>
                                </div>
                                <div className="section-line pos-rel">
                                    <img src="img/shape/section-title-line.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <DoctorsTwoSingleTeam image="7" name="Philimia D. Darwin" title="Founder" />
                        <DoctorsTwoSingleTeam image="8" name="Hekim D. Rswana" title="Dentist" />
                        <DoctorsTwoSingleTeam image="9" name="Tarana Halim" title="Tarana Halim" />
                        <DoctorsTwoSingleTeam image="10" name="Limonda Pwedie" title="Operator" />
                        <DoctorsTwoSingleTeam image="11" name="Kelian M. Habblu" title="Neurologist" />
                        <DoctorsTwoSingleTeam image="12" name="Romada G. WIlliam" title="Dentist" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeThreeTeams;