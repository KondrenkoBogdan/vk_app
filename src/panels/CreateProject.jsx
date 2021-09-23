import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header'
import { Panel } from '@vkontakte/vkui';
import ProjectPreview from "./ProjectPreview";

const CreateProject = ({ id, nameRef, go, topPadding, createProject }) => (
    <Panel id={id}>
        <Header topPadding={topPadding} go={go} backPage="projects"/>
        <div className="main" style={{paddingTop:topPadding+65+'px', minHeight:'calc(100vh - ' + (topPadding + 100) + 'px)'}}>
            <div className="new_project_container">
                <div className="new_project_title">Создание нового проекта</div>
                <input ref={nameRef} onKeyDown={(e) => e.keyCode === 13 ? createProject() : null} placeholder="Название проекта" name="name"/>
                <div className="btn-success btn_project_new" onClick={createProject}>Готово</div>
            </div>
        </div>
    </Panel>
);

export default CreateProject;
