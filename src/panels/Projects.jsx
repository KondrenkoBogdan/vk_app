import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header'
import { Panel } from '@vkontakte/vkui';
import ProjectPreview from "./ProjectPreview";

const Projects = ({ id, go, projects, topPadding, toProject, deleteProject, deleteAccess }) => (
    <Panel id={id}>
        <Header topPadding={topPadding} go={go} backPage="home"/>
        <div className="main" style={{paddingTop:topPadding+65+'px', minHeight:'calc(100vh - ' + (topPadding + 100) + 'px)'}}>
            <div className="projects-page">
                <div className="projects-page__top">
                    <h2 className="projects-page__title">Ваши проекты:</h2>
                    <div className="make_new_project_button" onClick={(e) => go(e)} data-to="create_project"><div className="btn--create">Создать проект</div></div>
                </div>
                {
                    !!projects.length ?
                        <>{projects.map(function(item){
                            return <ProjectPreview key={item.id} id={item.id} toProject={toProject} deleteProject={deleteProject}
                                                   name={item.name} access_text={item.access_text} deleteAccess={deleteAccess}
                                                   access_type={item.access_type} ml_count={item.ml_count} access_id={item.access_id}/>
                        })}</>
                        :
                        <div> Нет проектов</div>
                }
            </div>
        </div>
    </Panel>
);

export default Projects;
