import React from 'react';
import ContactForm from './ContactForm';
import { useTranslation } from 'react-i18next';

const ContactSection = () => {

    const { t } = useTranslation();

    return (
        <div id="contatc" className="row full-section contatc">
            <div className="text-center info-container">
                <h2>{t('STR_19')}</h2>
                <h3>{t('STR_20')}</h3>
                <p>{t('STR_21')}</p>
            </div>
            <div className="container row">
                <div className="col-12 col-lg-6 form-container">
                    <ContactForm />
                </div>
                <div className="col-12 col-lg-6">
                </div>
            </div>
        </div>
    );
};

export default ContactSection;