import Axios from 'axios'
import {URL} from  './Url'
const config = {

    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*'
   }
 };
export  const getallannoce = Axios.get(URL+"app/allannonce")
/*export const postannonce = (annonce) =>  Axios.post(URL+"user/postannoce", {
   annonce
},config,{withCredentials:false});*/
export const postannonce = (annonce) =>Axios.post(URL+"app/addproperties", annonce)
export const deleteannoce = (id) => 
Axios.delete(URL+`app/delateannonces/${id}`)

export const updateannonce = (annoce ) => Axios.patch(URL +`app/updateeannonces/${annoce[0]._id}`, annoce[0]


)
/* favorite annnonce api */
export const sedtofavorite = (annonce) => Axios.post(URL +'app/annocefavorite' , {annonce})
export const showallfavorites = Axios.get(URL + "app/allannoncefavorite")
export const deletefromfavorite = (id) => Axios.delete(URL + `app/delateannocefavorite/${id}`)


export const getoneannonce = (id) => Axios.get(URL + `app/properties/${id}`)