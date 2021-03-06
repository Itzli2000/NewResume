import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactSVG } from 'react-svg';
// Images
import MX from './../../assets/images/mx.svg';
import US from './../../assets/images/us.svg';

const LanguageSelector = () => {

    const [showoptions, setShowOptions] = useState(false);

    const { t, i18n } = useTranslation();

    const showOptions = () => {
        setShowOptions(showOptions => !showOptions);
    }

    const setLanguage = lang => {
        i18n.changeLanguage(lang);
        setShowOptions(false);
    }

    let imageLang = i18n.language === 'es' ? MX : US;

    return (
        <div className="selector-container">
            <div className="selected-languague" onClick={showOptions}>
                <ReactSVG className="svgIcon" src={imageLang} />
            </div>
            <div className={"options-language" + (showoptions ? ' show ' : '')}>
                <div
                    className={"option" + (i18n.language === 'es' ? ' active' : '')}
                    onClick={() => setLanguage('es')}
                >
                    <ReactSVG className="svgIcon" src={MX} /> &nbsp; {t('STR_1')}
                </div>
                <div
                    className={"option" + (i18n.language === 'en' ? ' active' : '')}
                    onClick={() => setLanguage('en')}
                >
                    <ReactSVG className="svgIcon" src={US} /> &nbsp; {t('STR_2')}
                </div>
            </div>
        </div>
    );
};

export default LanguageSelector;