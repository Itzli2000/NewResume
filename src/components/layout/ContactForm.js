import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
// Components
import Message from './Message';
// Email template
import { EmailTemplate } from './EmailTemplate';

const ContactForm = () => {

    const [emailsent, setEmailSent] = useState(undefined);
    const [submiting, setSubmiting] = useState(false);
    const { register, handleSubmit, errors } = useForm();
    const { t } = useTranslation();
    console.log(errors);

    const onSubmit = (data, e) => {
        const { email, firstname, message, title } = data;
        const body = EmailTemplate(email, firstname, title, message);
        setSubmiting(true);
        // https://smtpjs.com/
        window.Email.send({
            Host: "smtp.gmail.com",
            Username: "itzli2000@gmail.com",
            Password: "molinona&9",
            To: 'itzli2000@msn.com',
            From: 'itzli2000@gmail.com',
            Subject: 'Contacto desde portafolio',
            Body: body
        }).then(
            message => {
                console.log(message)
                if (message === 'OK') setEmailSent(true);
                if (message !== 'OK') setEmailSent(false);
                setSubmiting(false);
                e.target.reset();
                setTimeout(() => {
                    setEmailSent(undefined);
                }, 3000);
            }
        );
    };

    const mailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {
                emailsent !== undefined &&
                <Message
                    message={emailsent ? t('FORM_SENT') : t('FORM_NOT_SENT')}
                    type={emailsent ? 'alert-success' : 'alert:danger'}
                />
            }
            <div className="form-row mb-3">
                <div className="col-12 col-md-6">
                    <label htmlFor="firstname">{t('FORM_1')}</label>
                    <input
                        className="form-control"
                        id="firstname"
                        name="firstname"
                        ref={register({ required: true, minLength: 5 })}
                    />
                    {
                        (errors.firstname && errors.firstname.type === "required") &&
                        <small className="text-danger">{t('FORM_ERROR_1')}</small>
                    }
                    {
                        (errors.firstname && errors.firstname.type === "minLength") &&
                        <small className="text-danger">{t('FORM_ERROR_1_1')}</small>
                    }
                </div>
                <div className="col-12 col-md-6">
                    <label htmlFor="email">{t('FORM_2')}</label>
                    <input
                        className="form-control"
                        id="email"
                        name="email"
                        ref={register({ required: true, pattern: mailRegex })}
                    />
                    {errors.email && <small className="text-danger">{t('FORM_ERROR_2')}</small>}
                </div>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="title">{t('FORM_3')}</label>
                <input
                    className="form-control"
                    id="title"
                    name="title"
                    ref={register({ required: true, minLength: 3 })}
                />
                {
                    (errors.title && errors.title.type === "required") &&
                    <small className="text-danger">{t('FORM_ERROR_3')}</small>
                }
                {
                    (errors.title && errors.title.type === "minLength") &&
                    <small className="text-danger">{t('FORM_ERROR_3_1')}</small>
                }
            </div>
            <div className="form-group">
                <label htmlFor="message">{t('FORM_4')}</label>
                <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    placeholder={t('FORM_5')}
                    rows="5"
                    ref={register({ required: true, minLength: 15 })}
                ></textarea>
                {
                    (errors.message && errors.message.type === "required") &&
                    <small className="text-danger">{t('FORM_ERROR_4')}</small>
                }
                {
                    (errors.message && errors.message.type === "minLength") &&
                    <small className="text-danger">{t('FORM_ERROR_4_1')}</small>
                }
            </div>
            {
                !submiting ?
                    <input className="btn form-btn btn-block" type="submit" value={t('FORM_6')} />
                    :
                    <button className="btn form-btn btn-block" disabled><i class="fa fa-spinner fa-pulse" aria-hidden="true"></i>&nbsp;{t('FORM_7')}</button>
            }
        </form>
    );
};

export default ContactForm;