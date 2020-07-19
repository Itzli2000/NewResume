import React from 'react';
// Hooks
import { useTranslation } from 'react-i18next';

const ContactInformation = () => {

    const { t } = useTranslation();

    return (
        <div className="col-12 col-lg-6 contact-information">
            <p><i class="fa fa-map-marker" aria-hidden="true"></i> {t('STR_15')} <span>{t('STR_15_1')}</span></p>
            <p><i class="fa fa-phone" aria-hidden="true"></i> {t('STR_16')} <span><a href={`tel:${t('STR_16_2')}`}>{t('STR_16_1')}</a></span></p>
            <p><i class="fa fa-envelope" aria-hidden="true"></i> {t('STR_18')} <span><a href={`mailto:${t('STR_18_1')}`}>{t('STR_18_1')}</a></span></p>
        </div>
    );
};

export default ContactInformation;