import React from 'react';
// Components
import ProjectSection from './ProjectSection';
// Hooks
import { useTranslation } from 'react-i18next';
// Section data
import jobs from '../../constants/projects.json';

const ProjectSecond = () => {

    const { t } = useTranslation();

    return (
        <div className="row jobs-container">
            { t('') }
            {
                jobs.map( project => (
                    <ProjectSection key={project.id} project={project} />
                ))
            }
        </div>
    );
};

export default ProjectSecond;