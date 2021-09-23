import React, {useEffect} from "react"
import PhoneInput from 'react-phone-number-input'
import ru from 'react-phone-number-input/locale/ru'

const SimpleVkLanding = (props) => {

    let landing = props.landing
    let settings = landing.settings ? JSON.parse(landing.settings) : {}
    let title = settings.vk_title ? settings.vk_title : landing.title ? landing.title : null
    let description = settings.vk_description ? settings.vk_description : landing.description ? landing.description : null
    let img_src = landing.file.url ? landing.file.url : landing.attachment_url ? landing.attachment_url : null

    return <>
    <div id="vk_landing_body" style={{paddingTop:props.topPadding+'px', minHeight:'calc(100vh - ' + (props.topPadding + 100) + 'px)', maxWidth: "800px", margin:"0 auto"}} >
    { img_src ? <div className="land_img"><img onLoad={props.resize_window} className="full_width" src={img_src}/></div> : null }
    <div className="block" id="landing">
        { title ?
        <div className="vk_mini_app_title">
            <div className="title_container" style={{marginTop: "10px"}}>
                <div className={`title text_alignment_${settings.text_alignment}`}>{title}</div>
            </div>
            <div className=".triangle"></div>
        </div>
        : null }
        { description ? <div className={`description text_alignment_${settings.text_alignment}`}>{description}</div>:null }


        {/*{ settings.ask_phone    && !props.phone ? <PhoneInput labels={ru} placeholder="(912) 345-67-87" defaultCountry={settings.default_phone_code ? JSON.parse(settings.default_phone_code)[0].toUpperCase() : "RU"} value={props.phoneValue} onChange={props.phoneChange}/> : null }*/}
        {/*{ settings.ask_phone    && !props.phone ? <input onChange={props.phoneChange}/> : null }*/}
        {props.phone}
        { settings.ask_phone && !props.phone ? <form className="phone_phone_input_container phone_input_container needs-validation was-validated" id="user-data-form"
              style={{maxWidth: "240px", minWidth: "240px", margin: "20px auto 10px"}}>
            <div className="row justify-content-center">
                <div className="wh-form-field">
                    <div className="phone_select_type hidden">{settings.only_popular_phones ? 'popular' : settings.custom_phone_codes && settings.custom_phone_codes !== "[]" ? settings.custom_phone_codes : 'simple'}</div>
                    <div className="phone_select_country hidden">{settings.default_phone_code ? JSON.parse(settings.default_phone_code)[0] : "ru"}</div>
                    <div className="input-phone-wrapper">
                            <div className="phone_input_flex_container">
                            <div className="select-mask" style={{transition: "all 0.1s ease 0s", background: "white"}}>
                                <div className="select-mask__trigger">
                                    <div className="select_mask_country"></div>
                                    <div className="select_mask_code">{settings.default_phone_code ? JSON.parse(settings.default_phone_code)[1] : "+7"}</div>
                                </div>
                                <div className="select-mask__select"></div>
                            </div>
                            <input onChange={props.phoneChange} ref={props.phoneRef} className="form-control phone_input" name="phone" placeholder="(912) 345-67-89" required="" type="tel"
                                   style={{paddingLeft: "60.1px", paddingTop: "1px", paddingBottom: "1px", transition: "all 0.1s ease 0s", background: "white"}}/>
                        </div>
                        <div className="invalid-feedback_phone" style={{display: "none"}}>Укажите номер</div>
                        <div className="invalid-feedback_numbers" style={{display: "none"}}>Вводите только цифры</div>
                        <div className="invalid-feedback_phone_validation" style={{display: "none"}}>Телефон введен не корректно</div>
                    </div>
                </div>
            </div>
        </form> : null}
        {settings.ask_name    && !props.name ? <form className="phone_input_container needs-validation was-validated" id="user-data-form" style={{maxWidth: "240px", minWidth: "240px", margin: "20px auto 10px"}}>
            <div className="row justify-content-center">
                <div className="wh-form-field">
                    <input className="form-control name_input" onChange={props.nameChange} ref={props.nameRef} name="name" placeholder="Имя" required="" type="text" style={{padding: "1px 10px"}}/>
                    <div className="invalid-feedback_name">Укажите имя</div>
                </div>
            </div>
        </form> : null }
        {settings.ask_email    && !props.email ? <form className="phone_input_container needs-validation was-validated" id="user-data-form" style={{maxWidth: "240px", minWidth: "240px", margin: "20px auto 10px"}}>
            <div className="row justify-content-center">
                <div className="wh-form-field">
                    <input className="form-control email_input" onChange={props.emailChange} ref={props.emailRef} name="email" placeholder="Email" required="" type="text" style={{padding: "1px 10px"}}/>
                    <div className="invalid-feedback_email">Укажите email</div>
                    <div className="invalid-feedback_email_validation">Email введен не корректно</div>
                </div>
            </div>
        </form> : null }
        { settings.show_subscribers ?
            <div className="show_subscribers">
                <div className="subscribers">
                    <div className="subscribers__photos">
                        { !!props.subscribers.length ?
                            props.subscribers.map((member) => {
                                console.log(member)
                                return <div key={member.id} className="subscribers__photos-item" style={{backgroundImage: `url(${member.avatar})`}}></div>
                            })
                            :null
                        }
                    </div>
                    <div className="subscribers__text">{settings.subscribers_text ? settings.subscribers_text : "Подписчиков:"} {props.vkGroupInfo.members_count}</div>
                </div>
            </div>
        : null}
        <div id="subscribe-button" className="btn vk_link" onClick={props.toDialog}>{landing.vk_button_text ? landing.vk_button_text : "К диалогу"}</div>
        <div className="for_terms">
            { settings.show_terms ?
            <div style={{marginBottom:"20px"}}><a style={{fontSize:"12px",color:"#546464"}} target="_blank" href="https://salebot.pro/terms">Политика конфиденциальности</a></div>
            :null}
        </div>
        <a target="_top" style={{display:"none"}} href={"https://vk.com/im?sel=-" + props.vkGroup.group} id="message-button"
           className="button_mini_app"></a>
        {props.isAdmin ? <div className="edit_ml_admin" onClick={props.edit}>Редактировать</div> : null}
    </div>
    </div>
    </>
}

export default SimpleVkLanding;
