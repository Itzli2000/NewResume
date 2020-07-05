import React from 'react';
import PropTypes from 'prop-types';
// Hooks
import { useTranslation } from 'react-i18next';
// Images
import P1 from './../../assets/projects/p1.png';
import P2 from './../../assets/projects/p2.png';
import P3 from './../../assets/projects/p3.png';
import P4 from './../../assets/projects/p4.png';
import P5 from './../../assets/projects/p5.png';
import P6 from './../../assets/projects/p6.png';

const ProjectSection = ({ project }) => {

    const { description, image, title, backColor } = project;

    const { t } = useTranslation();
    let showImage = image === 'P1' ? P1 :
        image === 'P2' ? P2 :
            image === 'P3' ? P3 :
                image === 'P4' ? P4 :
                    image === 'P5' ? P5 : P6;

    return (
        <div className="col-12" style={{ backgroundColor: backColor }}>
            <div className="job-card">
                <div className="header">
                    <div className="image-container">
                        <img className="img-fluid" src={showImage} alt={t(title)} />
                    </div>
                </div>
                <div className="body">
                    <h4>{t(title)}</h4>
                    {
                        description && description.length > 0 &&
                        <p>{t(description)}</p>
                    }
                </div>
            </div>
        </div>
    );
};

ProjectSection.propTypes = {
    project: PropTypes.object.isRequired,
};

export default ProjectSection;