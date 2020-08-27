import Axios from 'axios'
import {URL} from  './Url'
import Cookies from 'js-cookie'
const token = Cookies.get('jwt')

const config = {
  headers:{
    'Authorization': `${token}`,
   
  }

 
 };
export  const getallproduit= Axios.get(URL+"app/allProduit")
/*export const postannonce = (annonce) =>  Axios.post(URL+"user/postannoce", {
   annonce
},config,{withCredentials:false});*/
export const postproduit = (Produit) =>Axios.post(URL+"app/addnewproduit", Produit)
export const deleteproduit = (id) => Axios.delete(URL+`app/delateProduit/${id}`)

export const updateproduit = (Produit ) => Axios.patch(URL +`app/updateeProduit/${Produit[0]}`,config)

export const getonproduit = (id) => Axios.get(URL + `app/Produit/${id}`,config)