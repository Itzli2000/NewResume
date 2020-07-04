import React from 'react';
import { ReactSVG } from 'react-svg';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
// Images
import JS from './../../assets/images/js.svg';
import BS from './../../assets/images/bootstrap.svg';
import RTJS from './../../assets/images/react.svg';
import SASS from './../../assets/images/sass.svg';
import GT from './../../assets/images/git.svg';
import GH from './../../assets/images/github.svg';

const ServiceCard = ({ service }) => {

    const { description, icon, title } = service;
    const { t } = useTranslation();
    let showIcon = icon === 'JS' ? JS :
                    icon === 'BS' ? BS :
                    icon === 'RTJS' ? RTJS :
                    icon === 'SASS' ? SASS :
                    icon === 'GT' ? GT : GH;

    const renderDescription = description => {
        return description.map((element, index) => {
            return (
                <li key={index + element}> <span></span> {t(element)}</li>
            )
        });
    }

    return (
        <div className="col-12 col-md-6 col-lg-4 mb-3">
            <div className="service-card">
                <div className="header">
                    <ReactSVG className={icon} src={showIcon} />
                </div>
                <div className="body">
                    <h4>{title}</h4>
                    {
                        description && description.length > 0 &&
                        <ol className="card-list">
                            {renderDescription(description)}
                        </ol>
                    }
                </div>
            </div>
        </div>
    );
};
ServiceCard.propTypes = {
    service: PropTypes.object.isRequired,
};

export default ServiceCard;