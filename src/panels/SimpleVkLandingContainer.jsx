import React, {useState, useEffect} from "react"
import SimpleVkLanding from "./SimpleVkLanding"
import bridge from "@vkontakte/vk-bridge";
import Domain from "../helpers/domain"
import { initPhoneInput, timeFormat } from "../helpers/phoneHelper"

const SimpleVkLandingContainer = (props) => {

    let isForce = props.proxy && props.proxy.data && JSON.parse(props.proxy.data) && JSON.parse(props.proxy.data).force === "1"

    if(!isForce){
        isForce = !!props.force
    }

    useEffect(function(){
        if(!props.phone){
            initPhoneInput()
        }
        timeFormat()
        if(isForce){
            toDialog()
        }
        resize_window()
    }, [])

    let resize_window = function(){
        bridge.send("VKWebAppResizeWindow", {"width": 800, "height": document.getElementsByTagName("body")[0].scrollHeight + 50})
    }

    let [nameValue, setNameValue] = useState('')
    let [emailValue, setEmailValue] = useState('')
    let [phoneValue, setPhoneValue] = useState('')
    let nameRef = React.createRef(), emailRef = React.createRef(), phoneRef = React.createRef()

    let settings = props.landing.settings ? JSON.parse(props.landing.settings) : {}

    let nameChange = (e) => {
        document.getElementsByClassName("invalid-feedback_name")[0].style.display = "none"
        nameRef.current.style.borderColor = "#ced4da"
        nameRef.current.style.borderWidth = "1px"
        setNameValue(nameRef.current.value)
    }
    let phoneChange = () => {
        document.getElementsByClassName('invalid-feedback_phone')[0].style.display = 'none'
        document.getElementsByClassName('invalid-feedback_phone_validation')[0].style.display = 'none'
        phoneRef.current.style.borderColor = "#ced4da"
        phoneRef.current.style.borderWidth = "1px"
        let phoneFlag = document.getElementsByClassName('select-mask')[0]
        phoneFlag.style.height              = '32px'
        phoneFlag.style.borderLeftColor     = '#ced4da'
        phoneFlag.style.borderTopColor      = '#ced4da'
        phoneFlag.style.borderBottomColor   = '#ced4da'
        phoneFlag.style.borderLeftWidth     = '1px'
        phoneFlag.style.borderTopWidth      = '1px'
        phoneFlag.style.borderBottomWidth   = '1px'
        setPhoneValue(document.getElementsByClassName("select_mask_code")[0].innerText.substr(1) + phoneRef.current.value)
    }
    let emailChange = () => {
        document.getElementsByClassName("invalid-feedback_email")[0].style.display = "none"
        document.getElementsByClassName("invalid-feedback_email_validation")[0].style.display = "none"
        emailRef.current.style.borderColor = "#ced4da"
        emailRef.current.style.borderWidth = "1px"
        setEmailValue(emailRef.current.value)
    }

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

    function validationRedBorder (el, phoneFlag) {
        el.style.borderColor = "red"
        el.style.borderWidth = "3px"
        if(phoneFlag){
            phoneFlag.style.height = '27px'
            phoneFlag.style.borderLeftColor = 'red'
            phoneFlag.style.borderTopColor = 'red'
            phoneFlag.style.borderBottomColor = 'red'
            phoneFlag.style.borderLeftWidth = '3px'
            phoneFlag.style.borderTopWidth = '3px'
            phoneFlag.style.borderBottomWidth = '3px'
        }
        setTimeout(function (){
            el.style.borderColor = "#ced4da"
            el.style.borderWidth = "1px"
            if(phoneFlag){
                phoneFlag.style.height = '32px'
                phoneFlag.style.borderLeftColor     = '#ced4da'
                phoneFlag.style.borderTopColor      = '#ced4da'
                phoneFlag.style.borderBottomColor   = '#ced4da'
                phoneFlag.style.borderLeftWidth     = '1px'
                phoneFlag.style.borderTopWidth      = '1px'
                phoneFlag.style.borderBottomWidth   = '1px'
            }
        }, 3000)
    }

    function openValidation(el){
        el.style.display = "block"
        setTimeout(function(){
            el.style.display = "none"
        }, 3000)
    }

    let toDialog = () => {
        let phone   = ""
        let email   = ""
        let name    = ""
        if(!isForce){
            if(settings.ask_phone && !props.phone){
                phone = phoneValue ? phoneValue.replace(/[+|| ]/g, "") : ''
                if(settings.phone_validate){
                    if(phoneRef.current.value === ""){
                        openValidation(document.getElementsByClassName('invalid-feedback_phone')[0])
                        return validationRedBorder(phoneRef.current, document.getElementsByClassName('select-mask')[0])
                    }
                    if(phone.match(/^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/g) === null){
                        openValidation(document.getElementsByClassName('invalid-feedback_phone_validation')[0])
                        return validationRedBorder(phoneRef.current, document.getElementsByClassName('select-mask')[0])
                    }
                }
            }
            if(settings.ask_email && !props.email){
                email = emailValue
                if(settings.email_validate){
                    if(email === ''){
                        openValidation(document.getElementsByClassName('invalid-feedback_email')[0])
                        return validationRedBorder(emailRef.current)
                    }
                    if(email.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g) === null){
                        openValidation(document.getElementsByClassName('invalid-feedback_email_validation')[0])
                        return validationRedBorder(emailRef.current)
                    }
                }
            }
            if(settings.ask_name && !props.name){
                name = nameValue
                if(settings.name_important && name === ''){
                    openValidation(document.getElementsByClassName("invalid-feedback_name")[0])
                    return validationRedBorder(nameRef.current)
                }
            }
        }
        let groupId = parseInt(props.vkGroup.group)
        let proxyKey = `id${props.proxy.id}`
        let param = {
            "group_id": groupId,
            "key": proxyKey
        }
        console.log("param")
        console.log(param)
        let isCurrentlySubscribedTime = props.isCurrentlySubscribed
        if(!isCurrentlySubscribedTime){
            isCurrentlySubscribedTime = true
            setTimeout(function(){
                isCurrentlySubscribedTime = false
            }, 1000)
        }

        fetch(Domain.url + '/fast_update_proxy', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'type': 'message_allow',
                'user_id': new URL(window.location).searchParams.get("vk_user_id"),
                'group_id': props.vkGroup.group,
                'proxy_id': props.proxy.id,
                'phone': phone,
                'email': email,
                'name_from_ml':name
            })
        }).then(function (response) {
            bridge.send("VKWebAppAllowMessagesFromGroup", param)
                .then((r) => {
                    if(r.result){
                        if(settings.vk_pixel){
                            !function(){
                                var t=document.createElement("script");
                                t.type="text/javascript";
                                t.async=!0;
                                t.src="https://vk.com/js/api/openapi.js?168";
                                t.onload=function(){
                                    VK.Retargeting.Event("Subscribe")
                                    VK.Goal("conversion")
                                };
                                document.head.appendChild(t)
                            }()
                        }
                        props.sendStats(props.accessToken, props.landing.id, props.landing.project_id)
                        console.log("props.isCurrentlySubscribed")
                        console.log(props.isCurrentlySubscribed)
                        fetch(Domain.url + '/vk_subscribe', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                'type': 'message_allow',
                                'user_id': new URL(window.location).searchParams.get("vk_user_id"),
                                'group_id': props.vkGroup.group,
                                'proxy_id': props.proxy.id,
                                'phone': phone,
                                'email': email,
                                'name_from_ml':name,
                                'is_currently_subscribed': isCurrentlySubscribedTime
                            })
                        }).then(function (response) {
                            document.getElementById('message-button').click();
                        });
                    }
                })
        });
    }

    let adminEdit = () => {
        props.openForm(props.landing.id)
    }

    return <SimpleVkLanding resize_window={resize_window} phoneValue={phoneValue} nameChange={nameChange} emailChange={emailChange} phoneChange={phoneChange} nameRef={nameRef} emailRef={emailRef} phoneRef={phoneRef} toDialog={toDialog} edit={adminEdit} {...props} />
}

export default SimpleVkLandingContainer;
