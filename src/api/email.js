import Axios from 'axios'
import {URL} from  './Url'

export const sendemail = (email) =>  Axios.post(URL+"app/sendemail", {
    email
})
export const sendemailtoproprietaire = (email) => Axios.post(URL + "app/sendemailtoproprietaire",{
    email
})

export const recupereremaill =(id) => Axios.get(URL + `app/getcurentemail/${id}`)