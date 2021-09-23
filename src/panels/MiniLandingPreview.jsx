import React, { useState } from 'react';
import Domain from "../helpers/domain"

const MiniLandingPreview = ({toStatistic, makeFavoriteMiniLandingEvent, openLinks, openedLink, destroyMiniLanding, name, settings, id, isFavorite, guid, contextMenu, openContext, openForm }) => (
    <li className="projects-page__card product_item"
        style={{padding: "20px", border: "1px solid #d4dff4", borderRadius: "6px", background: "white", marginBottom: "8px"}}>
        <div className="minilanding__title-name">Название: <span>{name}</span></div>
        {JSON.parse(settings).vk_site_favorite ? <div className="minilanding__title-is_favorite">Избранный минилендинг</div> : null}
        <div className="btn-dropdown-list">
            <div className="dots_trigger" onClick={() => {openContext(id)}}>
                <div className="blue_dot"></div>
                <div className="blue_dot"></div>
                <div className="blue_dot"></div>
            </div>
            <div className="project__list" style={{display: contextMenu === id ? 'block' : 'none'}}>
                <div className="project__list-topcut"></div>
                <div className="project__list-link project__list-link-to_favorite" onClick={() => makeFavoriteMiniLandingEvent(id)}><span>{!JSON.parse(settings).vk_site_favorite ? "Сделать избранным" : "Убрать из избранного"}</span></div>
                <div className="project__list-link project__list-link-edit" onClick={() => openForm(id)}><span>Редактировать</span></div>
                <div className="project__list-link project__list-link-stats" onClick={() => toStatistic(id)}><span>Статистика</span></div>
                <div className="project__list-link danger delete_ml" onClick={() => destroyMiniLanding(id)}><span>Удалить</span></div>
            </div>
        </div>
        <div className="accordion">
            <div className="accordion__item">
                <div className="flex-box" onClick={() => openLinks(id)}>
                    <div className="accordion__item-trigger">Ссылка на страницу подписки</div>
                    <div className="accordion__item-arrow" >
                        <svg style={{transform: openedLink === id ? 'rotate(0deg)' : 'rotate(180deg)'}} width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.4" d="M1 1.5L4.5 4.5L8 1.5" stroke="#626F7F" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </div>
                </div>
                <div className="accordion__item-content" style={{display: openedLink === id ? 'block' : 'none'}}>
                    <div className="flex-box left_relative">
                        <div className="ml_link_dot"></div>
                        <div><a target="_blank" className="ml_link_title" href={`https://vk.com/app${Domain.vk_app}#${guid}`}>Перейти на страницу подписки</a></div>
                    </div>
                    <div className="ml_link" style={{marginBottom: "12px"}}>https://vk.com/app{Domain.vk_app}#{guid}</div>
                </div>
            </div>
        </div>
    </li>
);

export default MiniLandingPreview;
