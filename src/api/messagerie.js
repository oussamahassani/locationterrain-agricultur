import Axios from 'axios'
import {URL} from  './Url'
export const sendemessage = (message) =>  Axios.post(URL+"app/sendemessage", {
    message
})

export const getmessage = (id) => Axios.get(URL + `app/getmessage/${id}`)