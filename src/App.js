import React, { useState, useEffect } from 'react';
import {
	joinAPI,
	toProjectAPI,
	deleteProject,
	deleteAccess,
	createProject,
	editMiniLanding,
	newMiniLanding,
	createMiniLanding,
	destroyMiniLanding,
	makeFavoriteMiniLanding,
	toStatisticAPI,
	smartRedirect,
	sendStats,
	updateMiniLanding, } from './axios';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import './panels/main.scss';

import Popup from "./helpers/Popup";

import Home from './panels/Home';
import Projects from './panels/Projects';
import ProjectContainer from './panels/ProjectContainer';
import FormContainer from './panels/FormContainer';
import CreateProject from './panels/CreateProjectContainer';
import Statistic from './panels/Statistic';
import VkSiteLandingContainer from './panels/VkSiteLandingContainer';
import GroupAdmin from './panels/GroupAdmin';
import SimpleVkLandingContainer from './panels/SimpleVkLandingContainer';

const App = () => {
	const [popup, setPopupTotal] = useState(null)
	const [error, setErrorTotal] = useState(null)
	const [activePanel, setActivePanel] = useState('loader');
	const [landing, setLanding] = useState(null);
	const [fetchedUser, setUser] = useState(null);
	const [projects, setProjects] = useState(null);
	const [accessToken, setAccessToken] = useState(null)
	const [topPadding, setTopPadding] = useState(0)
	const [project, setProject] = useState(null)
	const [access, setAccess] = useState(null)
	const [miniLandings, setMiniLandings] = useState(null)
	const [stats, setStats] = useState(null)
	const [miniLanding, setMiniLanding] = useState(null)
	const [currentGroup, setCurrentGroup] = useState(null)
	const [isAdmin, setIsAdmin] = useState(null)
	const [isCurrentlySubscribed, setIsCurrentlySubscribed] = useState(null)

	const [vkGroup, setVkGroup] = useState(null)
	const [subscribers, setSubscribers] = useState(null)
	const [vkGroupInfo, setVkGroupInfo] = useState(null)
	const [phone, setPhone] = useState(null)
	const [email, setEmail] = useState(null)
	const [name, setName] = useState(null)
	const [proxy, setProxy] = useState(null)
	const [force, setForce] = useState(null)

	useEffect(async () => {
		if(location.search.split("vk_platform=").length === 2 && location.search.split("vk_platform=")[1].split("&")[0] === "mobile_iphone"){
			setTopPadding(48)
		}
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
				if(data.insets){
					setTopPadding(data.insets.top)
				}
			}
			if(type === "VKWebAppAddToCommunityResult"){
				let group_id = data.group_id
				let link = "https://vk.com/app7062840_-" + group_id
				let text = <> Отлично, приложение <span class="color_blue">Salebot.pro</span> успешно добавлено в Ваше сообщество.<br/><br/> Вы можете перейти через него в приложение прямо сейчас <a href={link} target="_blank">{link}</a></>;
				setPopup({
					text:text,
					isQuestion: false,
					buttonText: "Закрыть",
					closePopup: function(){
						setPopup(null)
					}
				})
			}
		});
		console.log(location.search)
		console.log(location.hash)
		let response = await smartRedirect()
		console.log(response)
		if(response.data.success){
			console.log("response.data")
			console.log(response.data.page)
			console.log(response.data)
			if(response.data.page === "vk_site_landing" || response.data.page === "simple_vk_landing"){
				setAccessToken(response.data.key)
				setLanding(response.data.landing)
				setIsAdmin(response.data.isAdmin)
				setProject(response.data.project)
				if(response.data.isCurrentlySubscribed !== undefined){
					setIsCurrentlySubscribed(response.data.isCurrentlySubscribed)
				}
			}
			if(response.data.page === "simple_vk_landing"){
				let { vk_group, proxy, vk_group_info, subscribers, force, phone, email, name } = response.data
				setVkGroup(vk_group)
				setVkGroupInfo(vk_group_info)
				setSubscribers(subscribers)
				setProxy(proxy)
				setForce(force)
				setPhone(phone)
				setEmail(email)
				setName(name)
			}
			setActivePanel(response.data.page)
		} else {
			setActivePanel("home")
		}
	}, []);

	function setPopup(text){
		if(text){
			document.getElementsByTagName("body")[0].style.overflow = "hidden"
		} else {
			document.getElementsByTagName("body")[0].style.overflow = "auto"
		}
		setPopupTotal(text)
	}

	function setError(text, delay = 5000){
		setErrorTotal(text)
		setTimeout(function (){
			setErrorTotal(null)
		}, delay)
	}

	async function join(){
		let response = await joinAPI()
		if(response.status === 200){
			setAccessToken(response.data.access_key)
			setProjects(response.data.projects)
			setActivePanel("projects")
		}
	}
	async function deleteProjectEvent(event, project_id){
		event.stopPropagation()
		event.preventDefault()
		setPopup({
			text:"Вы подтверждаете удаление проекта? Восстановление будет уже невозможно.",
			isQuestion: true,
			closePopup: function(){
				setPopup(null)
			},
			callBack: async function (){
				let response = await deleteProject(accessToken, project_id)
				if(response.status === 200){
					setProjects(response.data.projects)
				}
				setPopup(null)
			}
		})
	}
	async function deleteAccessEvent(event, access_id, project_id){
		event.stopPropagation()
		event.preventDefault()
		setPopup({
			text:"Вы уверены, что хотите выйти из проекта ?",
			isQuestion: true,
			closePopup: function(){
				setPopup(null)
			},
			callBack: async function (){
				let response = await deleteAccess(accessToken, access_id, project_id)
				if(response.status === 200){
					setProjects(response.data.projects)
				}
				setPopup(null)
			}
		})
	}
	async function createProjectEvent(name){
		console.log("create project - "+name)
		let response = await createProject(accessToken, name)
		if(response.status === 200){
			if(response.data.success){
				setProject(response.data.project)
				setMiniLandings(response.data.miniLandings)
				setActivePanel("project")
			}else{
				if(response.data.error){
					setError(response.data.error)
				}
			}
		}
	}
	async function toProject(project_id){
		let response = await toProjectAPI(accessToken, project_id)
		if(response.status === 200){
			setProject(response.data.project)
			setAccess(response.data.access)
			setMiniLandings(response.data.miniLandings)
			setActivePanel("project")
		}
	}
	async function openForm(ml_id = null, type = null){
		let response
		if(ml_id === null){
			response = await newMiniLanding(accessToken, project.id)
		}else{
			response = await editMiniLanding(accessToken, ml_id, project.id)
		}
		console.log(response)
		if(response.status === 200){
			setProject(response.data.project)
			setMiniLanding(response.data.mini_landing)
			if(response.data.group_to_show){
				setCurrentGroup(response.data.group_to_show)
			}
			setActivePanel("form")
		}
	}
	async function updateMiniLandingEvent(formData){
		formData.append('key', accessToken)
		formData.append('project_id', project.id)
		formData.append('id', miniLanding.id)
		let response = await updateMiniLanding(formData)
		console.log(response)
		if(response.status === 200){
			if (response.data.success) {
				setProject(response.data.project)
				setAccess(response.data.access)
				setMiniLandings(response.data.mini_landing_pages)
				setActivePanel("project")
			} else {
				if(response.data.error){
					setError(response.data.error)
				}
			}
		}
	}
	async function createMiniLandingEvent(formData){
		formData.append('key', accessToken)
		formData.append('project_id', project.id)
		let response = await createMiniLanding(formData)
		console.log(response)
		if(response.status === 200){
			if (response.data.success) {
				setProject(response.data.project)
				setAccess(response.data.access)
				setMiniLandings(response.data.mini_landing_pages)
				setActivePanel("project")
			} else {
                let error = response.data.error
				if(error){
					setError(error.substring(error.indexOf(" ")))
				}
			}
		}
	}
	async function destroyMiniLandingEvent(ml_id, place = null){
		setPopup({
			text:"Вы уверены, что хотите удалить минилендинг ?",
			isQuestion: true,
			closePopup: function(){
				setPopup(null)
			},
			callBack: async function (){
				let response = await destroyMiniLanding(accessToken, ml_id, project.id)
				if(response.status === 200){
					if (response.data.success) {
						if(!place){
							setMiniLandings(response.data.mini_landings)
						} else if(place === "form"){
							toProject(response.data.project.id)
						}
					} else {
						if(response.data.error){
							setError(response.data.error)
						}
					}
				}
				setPopup(null)
			}
		})
	}
	async function makeFavoriteMiniLandingEvent(ml_id){
		let response = await makeFavoriteMiniLanding(accessToken, ml_id, project.id)
		if(response.status === 200){
			if (response.data.success) {
				setMiniLandings(response.data.mini_landings)
			} else {
				if(response.data.error){
					setError(response.data.error)
				}
			}
		}
	}
	async function toStatistic(ml_id){
		let response = await toStatisticAPI(accessToken, ml_id, project.id)
		if(response.status === 200){
			if (response.data.success) {
				setStats(response.data.stats)
				setActivePanel("stats")
			} else {
				if(response.data.error){
					setError(response.data.error)
				}
			}
		}
	}
	function addToCommunity(){
		bridge.send("VKWebAppAddToCommunity");
	}
	const myGo = e => {
		let trigger = e.currentTarget.dataset.to
		let id = e.currentTarget.dataset.id
		switch(trigger){
			case 'projects':
				return join()
			case 'project':
				return toProject(id)
			default:
				null
		}
	};
	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<AdaptivityProvider>
			<AppRoot>
				{popup != null ? <Popup
					text={popup.text} isQuestion={popup.isQuestion}
					closePopup={popup.closePopup} callBack={popup.callBack}
					buttonText={popup.buttonText}/> : null}
				{error != null ? <div style={{top: (topPadding + 65) + "px"}} className="err_popup" onClick={() => setError(null)}>{error}<div className="destroy_error">+</div></div> : null}
				<View activePanel={activePanel}>
					<ScreenSpinner size='large' id='loader' />
					<Home id='home' topPadding={topPadding} addToCommunity={addToCommunity} join={join} />
					<GroupAdmin id='group_admin' topPadding={topPadding} join={join}/>
					<SimpleVkLandingContainer isCurrentlySubscribed={isCurrentlySubscribed} setError={setError} proxy={proxy} force={force} vkGroup={vkGroup} vkGroupInfo={vkGroupInfo} subscribers={subscribers} email={email} phone={phone} name={name} accessToken={accessToken} sendStats={sendStats} openForm={openForm} isAdmin={isAdmin} id='simple_vk_landing' topPadding={topPadding} landing={landing}/>
					<VkSiteLandingContainer accessToken={accessToken} sendStats={sendStats} openForm={openForm} isAdmin={isAdmin} landing={landing} id='vk_site_landing' topPadding={topPadding} />
					<CreateProject topPadding={topPadding} id='create_project' go={myGo} setError={setError} createProject={createProjectEvent}/>
					<Projects topPadding={topPadding} id='projects' go={go} projects={projects} toProject={toProject} deleteProject={deleteProjectEvent} deleteAccess={deleteAccessEvent}/>
					<ProjectContainer toStatistic={toStatistic} makeFavoriteMiniLandingEvent={makeFavoriteMiniLandingEvent} destroyMiniLanding={destroyMiniLandingEvent} topPadding={topPadding} id='project' go={myGo} openForm={openForm} miniLandings={miniLandings} project={project} access={access}/>
					<Statistic toProject={toProject} topPadding={topPadding} id='stats' go={myGo} stats={stats}/>
					<FormContainer destroyMiniLanding={destroyMiniLandingEvent} setError={setError} createMiniLanding={createMiniLandingEvent} toProject={toProject} setPopup={setPopup} topPadding={topPadding} id='form' go={myGo} currentGroup={currentGroup} miniLanding={miniLanding} project={project} updateMiniLanding={updateMiniLandingEvent}/>
				</View>
			</AppRoot>
		</AdaptivityProvider>
	);
}

export default App;
