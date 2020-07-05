import React from 'react';
// Hooks
import { useTranslation } from 'react-i18next';

const ProjectFirst = () => {

    const { t } = useTranslation();

    return (
        <div className="container">
            <div className="row proyect-first">
                <div className="text-center info-container">
                    <h2>{t('PROJECT_F1')}</h2>
                    <p>{t('PROJECT_F2')}</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectFirst;