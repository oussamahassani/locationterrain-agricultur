import Axios from 'axios'
import {URL} from  './Url'
import Cookies from 'js-cookie'
const token = Cookies.get('jwt')

const config = {
  headers:{
    'Authorization': `${token}`,
   
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


,config)
/* favorite annnonce api */
export const sedtofavorite = (annonce , user) => {
  console.log(annonce,user)
  let nom = user[0].Nom 
  let prenom = user[0].Prenom
  let numtel = user[0].numtelephone
  let email = user[0].email 
  let Utilisateur = Cookies.get("_id")
   let obj = {...annonce[0]}
   Object.assign(obj,{"nomuser":nom,"prenomuser":prenom,"emailuser":email,"numtel":numtel,"Utilisateur":Utilisateur})
 return Axios.post(URL +'app/annocefavorite' , {obj},config)
}
export const showallfavorites = Axios.get(URL + `app/allannoncefavorite`)
export const deletefromfavorite = (id) => Axios.delete(URL + `app/delateannocefavorite/${id}`,config)


export const getoneannonce = (id) => Axios.get(URL + `app/properties/${id}`,config)