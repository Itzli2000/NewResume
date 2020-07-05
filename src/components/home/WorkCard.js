import React from 'react';
import PropTypes from 'prop-types';
// Hooks
import { useTranslation } from 'react-i18next';

const WorkCard = ({ work }) => {

    const { date, description, title } = work;
    const { t } = useTranslation();

    return (
        <div className="work-card">
            <strong>{date}</strong>
            <h5>{t(title)}</h5>
            <p>{t(description)}</p>
        </div>
    );
};

WorkCard.propTypes = {
    work: PropTypes.object.isRequired,
};

export default WorkCard;