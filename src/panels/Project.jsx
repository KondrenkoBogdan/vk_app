import React, {useEffect} from 'react';
import Header from './Header'
import { Panel } from '@vkontakte/vkui';
import MiniLandingPreview from "./MiniLandingPreview";

const Project = ({toStatistic, makeFavoriteMiniLandingEvent, openedLink, openLinks, destroyMiniLanding, id, go, miniLandings, project, access, topPadding, contextMenu, openContext, openForm }) => (
    <Panel id={id}>
        <Header topPadding={topPadding} go={go} backPage="projects"/>
        <div className="main" style={{paddingTop:topPadding+65+'px', minHeight:'calc(100vh - ' + (topPadding + 100) + 'px)'}}>
            <div className="project_ident">Проект: {project.name}</div>
            <div className="container">
                {!!miniLandings.length ?
                    <ul className="collection">
                        <div className="buttons_container small_block_display">
                            <div className="mls_title">Минилендинги</div>
                            <div className="ml_create" style={{marginTop: "10px"}} onClick={() => openForm(null, "new")}>Создать минилендинг</div>
                        </div>
                        {miniLandings.map(function(item){
                            return <MiniLandingPreview toStatistic={toStatistic} makeFavoriteMiniLandingEvent={makeFavoriteMiniLandingEvent} openedLink={openedLink} openLinks={openLinks} destroyMiniLanding={destroyMiniLanding} key={item.id} {...item} openForm={openForm} contextMenu={contextMenu} openContext={openContext}/>
                        })}
                    </ul>
                :
                    <div className="collection">
                        <div className="title center-align no_one_ml">Еще не создано ни одного минилендинга</div>
                        <div className="ml_create ml_create_new" style={{width:"fit-content", margin:"auto"}} onClick={() => openForm(null, "new")}>Создать минилендинг</div>
                    </div>
                }
            </div>
        </div>
    </Panel>
);

export default Project;
