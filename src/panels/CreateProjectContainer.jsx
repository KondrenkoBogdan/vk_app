import React from 'react'
import CreateProject from "./CreateProject"

const CreateProjectContainer = ({id, go, topPadding, createProject, setError}) => {

    let nameRef = React.useRef()

    let submitCreateProjectForm = function (){
        let name = nameRef.current.value
        if(name === ''){
            return setError("Название проекта не должно быть пустым")
        }else if(name.length > 30){
            return setError("Название проекта не должно быть больше 30 символов")
        }else if(name.split(/((http|https|ftp):\/\/[\w?=&.\/-;#~%-]+(?![\w\s?&.\/;#~%"=-]*>))/g).length > 1){
            return setError("Название проекта не может содержать ссылок")
        }
        createProject(name)
    }

    return <CreateProject nameRef={nameRef} id={id} go={go} topPadding={topPadding} createProject={submitCreateProjectForm}/>
}

export default CreateProjectContainer
