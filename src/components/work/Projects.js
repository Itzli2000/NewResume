import React from 'react';
import PropTypes from 'prop-types';
// Hooks
import { useTranslation } from 'react-i18next';
// Images
import CVD from './../../assets/projects/cvd.png';
import CVS from './../../assets/projects/cvs.png';
import JL from './../../assets/projects/jl.png';
import LP from './../../assets/projects/lp.png';
import MWP from './../../assets/projects/mwp.png';
import TSK from './../../assets/projects/tsk.png';

const Projects = ({ project }) => {

    const { description, image, title, backColor } = project;
    console.log(project);

    const { t } = useTranslation();
    let showImage = image === 'CVD' ? CVD :
        image === 'CVS' ? CVS :
            image === 'JL' ? JL :
                image === 'LP' ? LP :
                    image === 'MWP' ? MWP : TSK;

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

Projects.propTypes = {
    project: PropTypes.object.isRequired,
};

export default Projects;