import React from "react";
import ReactDom from "react-dom";

export const Popup = ({text, isQuestion, buttonText, callBack, closePopup}) => {
    return ReactDom.createPortal(
        <div className="new_dark_background">
            <div className="new_popup_container">
                <div className="close_close_popup" onClick={closePopup}>+</div>
                <div className="new_popup_title">
                    <span>{text}</span>
                </div>
                {
                    isQuestion ?
                        <div className="flex-box justify_center">
                            <div className="new_btn_close_popup margin_yes_no new_btn_close_popup_no" onClick={closePopup}>Нет</div>
                            <div className="new_btn_close_popup margin_yes_no new_btn_close_popup_yes" onClick={callBack}>Да</div>
                        </div>
                    :
                        <div className="new_btn_close_popup" onClick={closePopup}>{buttonText != null ? buttonText : "Закрыть"}</div>
                }
            </div>
        </div>,
        document.getElementById("portal")
    );
}

export default Popup;
