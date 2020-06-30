import React from 'react';
import { useTranslation } from 'react-i18next';

const SecondSection = () => {

    const { t } = useTranslation();

    return (
        <div className="row full-section first">
            {/* <div className="back-container">
                <ReactSVG className="cloud1" src={CLOUD1} />
                <ReactSVG className="cloud2" src={CLOUD2} />
                <ReactSVG className="trees" src={TREES} />
                <ReactSVG className="hills" src={HILLS} />
            </div> */}
            <div className="main-section container">
                <div className="badge badge-light">{t('STR_8')}</div>
                <p className="typer">
                    {t('STR_9')} &nbsp;
                </p>
                <p className="description">{t('STR_10')}</p>
            </div>
        </div>
    );
};

export default SecondSection;