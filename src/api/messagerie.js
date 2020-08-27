import Axios from 'axios'
import {URL} from  './Url'
import Cookies from 'js-cookie'
const token = Cookies.get('jwt')
const config = {
    headers:{
      'Authorization': `${token}`,
     
    }
  
   
   };
export const sendsms = (message) =>  Axios.post(URL+"app/sendesms", {
    message
},config)
export const sendemessage = (message) =>  Axios.post(URL+"app/sendmessage", {
    message
},config)
export const getmessage = (id) => Axios.get(URL + `app/getmessage/${id}`,config)

export const updatemessage = (id) => Axios.patch(URL + `app/updatemessage/${id}` , {"read" : true},config)

export const updatemessagedelate = (id) => Axios.patch(URL + `app/delate/${id}`, { "deleted":true},config)
export const updatemessagedraft = (id) => Axios.patch(URL + `app/updatemessagedraft/${id}`, { "draft":false},config)
export const updateconversation = (id , donner) => Axios.patch(URL + `app/updatemessagerie/${id}` , donner,config)