import React from 'react';
import HomeTwoSingleCount from '../../../components/HomeTwoSingleCount/HomeTwoSingleCount';

const HomeTwoCounter = () => {
    return (
        <>
            <section className="counter-wraper theme-bg pt-120 pb-175">
                <div className="container">
                    <div className="row justify-content-around">

                        <HomeTwoSingleCount icon="4" counter="540" subtitle="Expert Doctors" />
                        <HomeTwoSingleCount icon="5" counter="899" subtitle="Problem Solve" />
                        <HomeTwoSingleCount icon="6" counter="100" subtitle="Award Winner" />

                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeTwoCounter;