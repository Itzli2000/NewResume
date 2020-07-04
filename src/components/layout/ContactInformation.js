import React from 'react';
// Hooks
import { useTranslation } from 'react-i18next';

const ContactInformation = () => {

    const { t } = useTranslation();
     
    return (
        <div className="row">
            <div className="col-12 col-md-6">
                <p>{t('STR_15')} <span>{t('STR_15_1')}</span></p>
            </div>
            <div className="col-12 col-md-6">
                <p>{t('STR_16')} <span><a href={`tel:${t('STR_16_2')}`}>{t('STR_16_1')}</a></span></p>
            </div>
            <div className="col-12 col-md-6">
                <p>{t('STR_18')} <span><a href={`mailto:${t('STR_18_1')}`}>{t('STR_18_1')}</a></span></p>
            </div>
        </div>
    );
};

export default ContactInformation;