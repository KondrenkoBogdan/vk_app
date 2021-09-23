import React from 'react'
import Form from "./Form"

const FormContainer = ({ destroyMiniLanding, setError, createMiniLanding, toProject, project, setPopup, currentGroup, id, go, topPadding, miniLanding, updateMiniLanding}) => {

    let nameRef = React.useRef()
    let nameLinkRef = React.useRef()
    let fileRef = React.useRef()
    let titleRef = React.useRef()
    let descriptionRef = React.useRef()
    let pixelRef = React.useRef()
    let alignRef = React.useRef()
    let buttonRef = React.useRef()
    let termsRef = React.useRef()

    let filePreviewRef = React.createRef()
    let fileDescRef = React.createRef()
    let fileNameRef = React.createRef()

    let delete_file = false;
    let group_id;
    let group_desc;
    let will_remake;
    let openedFromGroup = location.search.match(/vk_group_id=([0-9]+)/g) ? location.search.match(/vk_group_id=([0-9]+)/g)[0].split("vk_group_id=")[1] : null
    let openedFromGroupRole = location.search.match(/vk_viewer_group_role=([a-z]+)/g) ? location.search.match(/vk_viewer_group_role=([a-z]+)/g)[0].split("vk_viewer_group_role=")[1] : null

    if(miniLanding.id && currentGroup){
        if(openedFromGroup && openedFromGroup !== currentGroup){
            will_remake = "Если вы подтвердите форму, минилендинг будет перепривязан к группе: " + openedFromGroup
        }
        group_id = currentGroup
        group_desc = "Минилендинг привязан к группе: " + currentGroup
    } else {
        group_id = openedFromGroup
        group_desc = "Минилендинг будет привязан к группе: " + openedFromGroup
    }

    let refs = {
        name: nameRef,
        nameLink: nameLinkRef,
        file: fileRef,
        title: titleRef,
        description: descriptionRef,
        pixel: pixelRef,
        align: alignRef,
        button: buttonRef,
        terms: termsRef,
        filePreviewRef:filePreviewRef,
        fileDescRef:fileDescRef,
        fileNameRef:fileNameRef,
    }

    function fileOnChange(){
        if(fileRef.current.files[0]){
            fileDescRef.current.style.display = "none"
            filePreviewRef.current.style.display = "flex"
            fileNameRef.current.innerText = fileRef.current.files[0].name
            if(!fileRef.current.files[0].type.startsWith("image")){
                setError('Вы загружаете файл, который не является изображением.')
            } else if (fileRef.current.files[0].size > 1048576) {
                setError("Загружаемый файл слишком велик. Максимальный размер файла должен быть меньше 1 мегабайта.")
            }
        } else {
            fileDescRef.current.style.display = "block"
            filePreviewRef.current.style.display = "none"
            fileNameRef.current.innerText = ""
        }
    }

    function removeCurrentFile (e) {
        delete_file = true
        fileDescRef.current.innerText = "Загрузите ваше изображение для минилендинга"
        e.target.innerHTML = ''
    }

    function destroyFile () {
        fileRef.current.value = ""
        fileDescRef.current.style.display = "block"
        filePreviewRef.current.style.display = "none"
        fileNameRef.current.innerText = ""
    }

    function validationRedBorder (ref) {
        ref.current.style.borderColor = "red"
        ref.current.style.borderWidth = "3px"
        setTimeout(function (){
            ref.current.style.borderColor = "#6d6d6d"
            ref.current.style.borderWidth = "1px"
        }, 3000)
    }

    function acceptForm(){
        let hasError = false
        if(nameLinkRef.current.value.match(/^[\w\-@]*$/g) === null){
            validationRedBorder(nameLinkRef)
            return setError('Вы ввели некорректное название в ссылке')
        }
        if(nameLinkRef.current.value.length > 50){
            validationRedBorder(nameLinkRef)
            return setError('Максимальный размер для названия в ссылке 50 символов')
        }
        if(buttonRef.current.value.length > 35){
            validationRedBorder(buttonRef)
            return setError('Максимальный размер для текста кнопки 35 символов')
        }
        if(titleRef.current.value.length > 150){
            validationRedBorder(titleRef)
            return setError('Максимальный размер заголовка 150 символов')
        }
        if(nameRef.current.value === ""){
            hasError = true
            validationRedBorder(nameRef)
        }
        if(titleRef.current.value === ""){
            hasError = true
            validationRedBorder(titleRef)
        }
        if(descriptionRef.current.value === ""){
            hasError = true
            validationRedBorder(descriptionRef)
        }
        if(hasError){
            return setError('Вы не заполнили обязательные поля')
        }
        let obj = {
            vk_site_group_id: openedFromGroup,
            name: nameRef.current.value,
            guid: nameLinkRef.current.value,
            title: titleRef.current.value,
            description: descriptionRef.current.value,
            vk_pixel: pixelRef.current.value,
            text_alignment: alignRef.current.value,
            vk_button_text: buttonRef.current.value,
            show_terms: termsRef.current.checked
        }
        console.log(obj)
        const data = new FormData();
        data.append("mini_landing_page", JSON.stringify(obj))
        data.append("delete_file", delete_file.toLocaleString())
        if(fileRef.current.files[0]){
            data.append("file", fileRef.current.files[0]);
        }
        if (miniLanding.id) {
            updateMiniLanding(data)
        } else {
            createMiniLanding(data)
        }
    }
    function destroyCurrentML(){
        destroyMiniLanding(miniLanding.id, "form")
    }
    return <Form destroyMiniLanding={destroyCurrentML} removeCurrentFile={removeCurrentFile} destroyFile={destroyFile} fileOnChange={fileOnChange} project={project} toProject={toProject} setPopup={setPopup} openedFromGroup={openedFromGroup} openedFromGroupRole={openedFromGroupRole} will_remake={will_remake} group_desc={group_desc} refs={refs} miniLanding={miniLanding} id={id} go={go} topPadding={topPadding} acceptForm={acceptForm}/>
}

export default FormContainer
