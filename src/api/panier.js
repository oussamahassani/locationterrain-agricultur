import Axios from 'axios'
import {URL} from './Url'


export const getallproduit = Axios.get(URL + "app/getallpannierproduit")

export const posttopanier = (produit) => Axios.post(URL +"app/postTopannier" , produit)

export const delateonefrompannier = (id) => Axios.delete(URL + "app/delateoneproduit/"+id)