import React, { useState } from "react"
import Project from "./Project"
import MiniLandingPreview from "./MiniLandingPreview";

const ProjectContainer = (props) => {

    const [contextOpened, setContextOpened] = useState(null)
    const [openedLink, setOpenedLinks] = useState(10)

    function openContext(id){
        if(contextOpened === id){
            setContextOpened(null)
        } else {
            setContextOpened(id)
        }
    }
    function openLinks(id){
        if (openedLink === id) {
            setOpenedLinks(null)
        } else {
            setOpenedLinks(id)
        }
    }
    document.getElementsByTagName('body')[0].onmouseup = function(e){
        if(e.target.className !== "blue_dot" && e.target.className !== "dots_trigger"){
            setContextOpened(null)
        }
    }

    // return <Project conecxtMenu={contextOpened} id={id} project={project} go={go} topPadding={topPadding} access={access} miniLandings={miniLandings}/>
    return <Project {...props} openedLink={openedLink} openLinks={openLinks} contextMenu={contextOpened} openContext={openContext}/>
}

export default ProjectContainer;
