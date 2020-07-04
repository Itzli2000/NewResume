import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

const ContactForm = () => {

    const { register, handleSubmit, errors } = useForm();
    const { t } = useTranslation();
    const onSubmit = (data) => {
        console.log('Cambio 2');
        console.log(data);
        const { email, firstname, message, title } = data;
        // const tok = "3e59025c-3af2-4e08-af4d-d0f8bba48489";
        const body = `${firstname} \n email: ${email} dice: \n ${message}`;
        // https://smtpjs.com/
        window.Email.send({
            // SecureToken: tok,
            Host: "smtp.gmail.com",
            Username: "itzli2000@gmail.com",
            Password: "molinona&9",
            To: 'itzli2000@msn.com',
            From: 'itzli2000@gmail.com',
            Subject: title,
            Body: body
        }).then(
            message => console.log(message)
        );
    };
    const mailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-row mb-3">
                <div className="col-12 col-md-6">
                    <label htmlFor="firstname">{t('FORM_1')}</label>
                    <input
                        className="form-control"
                        id="firstname"
                        name="firstname"
                        ref={register({ required: true })}
                    />
                    {errors.firstname && <small className="text-danger">{t('FORM_ERROR_1')}</small>}
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
                    ref={register({ required: true })}
                />
                {errors.title && <small className="text-danger">{t('FORM_ERROR_3')}</small>}
            </div>
            <div className="form-group">
                <label htmlFor="message">{t('FORM_4')}</label>
                <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    placeholder={t('FORM_5')}
                    rows="5"
                    ref={register({ required: true })}
                ></textarea>
                {errors.message && <small className="text-danger">{t('FORM_ERROR_4')}</small>}
            </div>

            <input className="btn form-btn btn-block" type="submit" />
        </form>
    );
};

export default ContactForm;