import * as axios from "axios"
import Domain from "./helpers/domain"

const instance = axios.create({
    baseURL: Domain.url + "/"
})

export const joinAPI = () => {
    return instance.get("vk_site/login_api" + location.search)
}
export const toProjectAPI = (token, project_id) => {
    return instance.get("vk_site/projects_api?key=" + token + "&project_id=" + project_id)
}
export const deleteProject = (token, project_id) => {
    return instance.delete("vk_site/delete_project_api?key=" + token + "&project_id=" + project_id)
}
export const deleteAccess = (token, access_id, project_id) => {
    return instance.delete("vk_site/quit_project_api?key=" + token + "&project_id=" + project_id+ "&access_id=" + access_id)
}
export const createProject = (token, name) => {
    return instance.put("vk_site/create_project_api", {key:token,name: name})
}
export const newMiniLanding = (token, project_id) => {
    return instance.get("vk_site/new_ml_api?key=" + token + "&project_id=" + project_id)
}
export const editMiniLanding = (token, ml_id, project_id) => {
    return instance.get("vk_site/edit_ml_api?key=" + token +"&id=" + ml_id + "&project_id=" + project_id)
}
export const destroyMiniLanding = (token, ml_id, project_id) => {
    return instance.delete("vk_site/destroy_ml_api?key=" + token +"&id=" + ml_id + "&project_id=" + project_id)
}
export const makeFavoriteMiniLanding = (token, ml_id, project_id) => {
    return instance.post("vk_site/make_favorite_api",{key:token, id: ml_id, project_id: project_id})
}
export const toStatisticAPI = (token, ml_id, project_id) => {
    return instance.get("vk_site/statistic_api?key=" + token +"&id=" + ml_id + "&project_id=" + project_id)
}
export const smartRedirect = () => {
    let hash = location.hash ? "&hash=" + location.hash.substr(1) : ""
    return instance.get("vk_site/vk_mini_app_api" + location.search + hash)
}
export const sendStats = (key, ml_id, project_id) => {
    return instance.post("vk_site/send_stats_api" + location.search + "&key=" + key + "&id=" + ml_id + "&project_id=" + project_id)
}
export const updateMiniLanding = (formData) => {
    return instance.post("vk_site/update_ml_api" + location.search, formData,{
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}
export const createMiniLanding = (formData) => {
    return instance.post("vk_site/create_ml_api" + location.search, formData,{
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}
