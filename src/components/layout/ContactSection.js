import React from 'react';
import ContactForm from './ContactForm';
import ContactInformation from './ContactInformation';
// Hooks
import { useTranslation } from 'react-i18next';

const ContactSection = () => {

    const { t } = useTranslation();

    return (
        <div id="contatc" className="row full-section contatc">
            <div className="text-center info-container">
                <h2>{t('FORM_SECTION_1')}</h2>
                <h3>{t('FORM_SECTION_2')}</h3>
                <p>{t('FORM_SECTION_3')}</p>
            </div>
            <div className="container row">
                <div className="col-12 col-lg-6 form-container">
                    <ContactForm />
                </div>
                <div className="col-12 col-lg-6">
                    <ContactInformation />
                </div>
            </div>
        </div>
    );
};

export default ContactSection;