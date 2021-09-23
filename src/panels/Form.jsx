import React, {useEffect} from 'react';
import spinner from "../img/spinner.gif"
import Header from "./Header"
import { Panel } from '@vkontakte/vkui';

const FormMain = ({ destroyMiniLanding, removeCurrentFile, destroyFile, fileOnChange, setPopup, toProject, project, openedFromGroup, openedFromGroupRole, will_remake, group_desc, id, go, topPadding, miniLanding, acceptForm, refs}) => {

    useEffect(() => {
        if(!openedFromGroup || !openedFromGroupRole){
            setPopup({
                text:"Пожалуйста, зайдите в приложение из сообщества в котором вы администратор, чтобы форма открывалась.",
                isQuestion: false,
                buttonText: "Закрыть",
                closePopup: function(){
                    toProject(project.id)
                    setPopup(null)
                }
            })
        }
        if (miniLanding.id) {
            let settings = JSON.parse(miniLanding.settings)
            refs.name.current.value = miniLanding.name ? miniLanding.name : ""
            refs.nameLink.current.value = miniLanding.guid ? miniLanding.guid : ""
            refs.title.current.value = miniLanding.title ? miniLanding.title : ""
            refs.description.current.value = miniLanding.description ? miniLanding.description : ""
            refs.pixel.current.value = settings.vk_pixel ? JSON.parse(miniLanding.settings).vk_pixel : ""
            refs.align.current.value = settings.text_alignment
            refs.button.current.value = miniLanding.vk_button_text ? miniLanding.vk_button_text : ""
            refs.terms.current.checked = settings.show_terms
        }
    }, [])

    return (<Panel id={id}>
        <Header topPadding={topPadding} go={go} backPage="project" id={miniLanding.project_id}/>
        <div className="main"
             style={{paddingTop: topPadding + 65 + 'px', minHeight: 'calc(100vh - ' + (topPadding + 100) + 'px)'}}>
            <div className="container vk_ml_form">
                <h4 className="ml_h4_title">{miniLanding.id ? "Редактирование" : "Создание"} минилендинга</h4>
                <div className="flex-box flex_wrap_wrap">
                    <div className="current_group_title">{group_desc}</div>
                    <div className="current_group_title">{will_remake ? will_remake : null}</div>
                </div>
                <form className="simple_form new_mini_landing_page" id="new_mini_landing_page">
                    
                    <div className="input_title">Название</div>
                    <input ref={refs.name} placeholder="Название минилендинга" id="mini_landing_page_name"/>

                    <div className="input_title">Название в ссылке. По умолчанию уникальная строка</div>
                    <input ref={refs.nameLink} placeholder="Название в ссылке" id="mini_landing_page_guid"/>

                    <div className="input_title">Изображение</div>
                    <div className="vk-site__file-input">
                        <div className="file_button"
                             onClick={() => document.getElementById("mini_landing_page_file").click()}>Файл
                        </div>
                        <div className="file_description">
                            <div ref={refs.fileDescRef} className="file_description_init">
                                {!miniLanding.file.url ?
                                    <span className="upload_your_file">Загрузите ваше изображение для минилендинга</span>
                                :<>
                                    <span className="you_have_file">У вас есть загруженный файл: </span>
                                    <span className="blue_color file_has_init">{miniLanding.file.url.split('/')[miniLanding.file.url.split('/').length - 1]}</span>
                                </>}
                            </div>
                            <div ref={refs.filePreviewRef} className="file_preview flex-box">
                                <div className="destroy_file" onClick={destroyFile}>+</div>
                                <div className="selected_file_min_width">Выбран файл:</div>
                                <div ref={refs.fileNameRef} className="name_of_file"></div>
                            </div>
                        </div>
                        <div className="file-field input-field col file optional mini_landing_page_file s12">
                            <input onChange={fileOnChange} ref={refs.file} type="file" id="mini_landing_page_file" accept="image/*"/>
                        </div>
                    </div>
                    {miniLanding.file.url ?
                        <div className='remove_file_link' onClick={(e) => {removeCurrentFile(e)}}>Удалить прикрепленный файл</div>
                    :null}
                    <div className="input_title">Заголовок</div>
                    <input ref={refs.title} placeholder="Заголовок" id="mini_landing_page_title"/>

                    <div className="input_title">Описание</div>
                    <textarea ref={refs.description} placeholder="Описание" id="mini_landing_page_description"></textarea>

                    <div className="input_title">Пиксель ВКонтакте</div>
                    <input ref={refs.pixel} placeholder="Пиксель ВКонтакте" id="mini_landing_page_vk_pixel"/>

                    <div className="input_title">Ориентация текста</div>
                    <select ref={refs.align} id="mini_landing_page_text_alignment">
                        <option value="">По умолчанию</option>
                        <option value="1">По левому краю</option>
                        <option value="2">По центру</option>
                        <option value="3">По ширине</option>
                        <option value="4">По правому краю</option>
                    </select>

                    <div className="input_title">Текст кнопки (По умолчанию "К диалогу")</div>
                    <input ref={refs.button} placeholder="Текст кнопки" id="mini_landing_page_vk_button_text"/>

                    <label>
                        <input ref={refs.terms} type="checkbox" id="mini_landing_page_show_terms"/>
                        <span className="show_terms_text">Отображать политику конфиденциальности</span>
                    </label>

                    <div onClick={acceptForm} className="btn-success"
                         style={{width: "fit-content"}}>Готово
                    </div>
                    { miniLanding.id ?
                        <div className="relative_in_form">
                            <div className="destroy_ml_form" onClick={destroyMiniLanding}>Удалить минилендинг</div>
                        </div>
                    :null}
                </form>
            </div>
        </div>
    </Panel>)
};

export default FormMain;
