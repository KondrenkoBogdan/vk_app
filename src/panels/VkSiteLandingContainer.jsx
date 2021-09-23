import React from 'react'
import VkSiteLanding from "./VkSiteLanding"
import bridge from '@vkontakte/vk-bridge';

const VkSiteLandingContainer = (props) => {

    let settings = props.landing.settings ? JSON.parse(props.landing.settings) : {}

    if(settings.vk_pixel){
        !function(){
            var t=document.createElement("script");
            t.type="text/javascript";
            t.async=!0;
            t.src="https://vk.com/js/api/openapi.js?168";
            t.onload=function(){
                VK.Retargeting.Init(settings.vk_pixel);
                VK.Retargeting.Hit()
                VK.Retargeting.Event("View")
                VK.Goal("view_content")
            };
            document.head.appendChild(t)
        }()
    }

    let sendEvent = function(){
        bridge.send("VKWebAppAllowMessagesFromGroup", {"group_id": parseInt(settings.vk_site_group_id)})
            .then(r => {
                console.log(r)
                if(r.result){
                    if(settings.vk_pixel){
                        VK.Retargeting.Event("Subscribe")
                        VK.Goal("conversion")
                    }
                    props.sendStats(props.accessToken, props.landing.id, props.landing.project_id)
                    document.getElementById("message-button").click()
                }
            })
    }

    return <VkSiteLanding { ...props } sendEvent={sendEvent} settings={settings}/>
}

export default VkSiteLandingContainer
