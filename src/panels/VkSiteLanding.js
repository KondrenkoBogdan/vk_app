import React from 'react'

const VkSiteLanding = (props) => {
    return <div className="block vk_site_landing_for_padding" id="landing" style={{paddingTop: props.topPadding + "px"}}>
        <div className="land_img">
            {props.landing.file.url ?
                <img src={props.landing.file.url}/> :
                props.landing.attachment_url ?
                <img src={props.landing.attachment_url}/> :
                null}
        </div>
        <div className="vk_mini_app_title">
            <div className="title_container" style={{marginTop: props.landing.file.url || props.landing.attachment_url ? "10px" : "0"}}>
                <div className="title"><p>{props.landing.title}</p></div>
            </div>
        </div>
        <div className={"description text_alignment_" + props.settings.text_alignment ? props.settings.text_alignment : "" }>{props.landing.description}</div>
        <div id="subscribe-button-site" onClick={props.sendEvent}>{props.landing.vk_button_text ? props.landing.vk_button_text : "К диалогу"}</div>
        <div className="for_terms"></div>
        {props.settings.show_terms ? <div style={{marginBottom:"20px"}}><a href="https://salebot.pro/terms" style={{fontSize:"12px", color:"#546464"}} target="_blank">Политика конфиденциальности</a></div> : null}
        <a href={"https://vk.com/im?sel=-" + props.settings.vk_site_group_id} id="message-button" target="_blank"></a>
        {props.isAdmin ? <div className="edit_ml_admin" onClick={() => props.openForm(props.landing.id)}>Редактировать</div> : null}
    </div>
}

export default VkSiteLanding
