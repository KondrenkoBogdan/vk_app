import React from 'react';
import Header from './Header'
import { Panel } from '@vkontakte/vkui';

const Statistic = ({ id, go, topPadding, stats }) => (
    <Panel id={id}>
        <Header topPadding={topPadding} go={go} backPage="projects"/>
        <div className="main" style={{paddingTop:topPadding+65+'px', minHeight:'calc(100vh - ' + (topPadding + 100) + 'px)'}}>
            <div className="stats_collection">
                <div className="vk_stats_count">Всего людей разрешили отправку сообщений: {stats.length}</div>
                {stats.map(function(item){
                    return <a href={"https://vk.com/id"+item.id} target="_blank" className='no_text_decoration'>
                        <div className="flex-box vk_site_stats_user">
                            <div className="vk_statistic_avatar">
                                <img src={item.photo_max} className="vk_avatar"/>
                            </div>
                            <div className="column_flex_box vk_stats_name">
                                {item.first_name + item.last_name}
                            </div>
                        </div>
                    </a>
                }, '')}
            </div>
        </div>
    </Panel>
);

export default Statistic;
