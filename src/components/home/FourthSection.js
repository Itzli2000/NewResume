import React from 'react';
// Components
import WorkCard from './WorkCard';
// Services data
import workData from '../../constants/works.json';
// Helper
import { splitArray } from '../../helpers';
// Hooks
import { useTranslation } from 'react-i18next';

const FourthSection = () => {

    let [firstHalf, secondHalf] = splitArray([...workData]);
    const { t } = useTranslation();

    return (
        <div className="container">
            <div className="row fourth">
                <div className="col-12 text-center info-container">
                    <h2>{t('WORK_F1')}</h2>
                    <p>{t('WORK_F2')}</p>
                </div>
                <div className="col-12 col-md-6">
                    <div className="work-list-container">
                        {
                            firstHalf ?
                                firstHalf.map(work => (
                                    <WorkCard key={work.id} work={work} />
                                ))
                                : null
                        }
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="work-list-container">
                        {
                            secondHalf ?
                                secondHalf.map(work => (
                                    <WorkCard key={work.id} work={work} />
                                ))
                                : null
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FourthSection;