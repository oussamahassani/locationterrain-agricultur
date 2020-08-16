import Axios from 'axios'
import {URL} from  './Url'
export const sendemessage = (message) =>  Axios.post(URL+"app/sendemessage", {
    message
})

export const getmessage = (id) => Axios.get(URL + `app/getmessage/${id}`)

export const updatemessage = (id) => Axios.patch(URL + `app/updatemessage/${id}` , {"read" : true})

export const updatemessagedelate = (id) => Axios.patch(URL + `app/delate/${id}`, { "deleted":true})
export const updatemessagedraft = (id) => Axios.patch(URL + `app/updatemessagedraft/${id}`, { "draft":false})
export const updateconversation = (id , donner) => Axios.patch(URL + `app/updatemessagerie/${id}` , donner)