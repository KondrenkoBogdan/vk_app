import React from 'react';

const ProjectPreview = ({ id, access_id, name, access_text, access_type, ml_count, toProject, deleteProject, deleteAccess }) => (
    <div className="project_click_link" onClick={() => toProject(id)}>
        <div className="projects-page__card">
            <div className="p_id hidden">{id}</div>
            <div className="projects-page__card-box">
                <div className="projects-page__card-num">№{id}</div>
                <div className="projects-page__card-info">
                    <div className="projects-page__card-name">
                        <span className="projects-page__card-id show_600">#{id}  </span>
                        <span className="projects-page__name-project">Название: <span>{name}</span></span>
                    </div>
                    <div className="projects-page__card-type projects-page__card-type--role">
                        <span className="projects-page__role-project bold_470">Доступ: <span>{access_text}</span></span>
                    </div>
                    <div className="projects-page__card-ml_count"><span>{ml_count} минилендинг</span></div>
                </div>
            </div>
            <div className="quit_project" onClick={(e) => deleteAccess(e, access_id, id)}><i className="fas fa-sign-out-alt"></i></div>
            {access_type === 0 ? <div className="destroy_project_container" onClick={(e) => deleteProject(e, id)}><i className="fas fa-trash-alt"></i></div> : null}
        </div>
    </div>
);

export default ProjectPreview;
