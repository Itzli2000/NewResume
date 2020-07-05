import React from 'react';
// Components
import Projects from './Projects';
// Hooks
import { useTranslation } from 'react-i18next';
// Section data
import jobs from './../../constants/projects.json';

const WorkSecond = () => {

    const { t } = useTranslation();

    return (
        <div className="row jobs-container">
            { t('') }
            {
                jobs.map( project => (
                    <Projects key={project.id} project={project} />
                ))
            }
        </div>
    );
};

export default WorkSecond;