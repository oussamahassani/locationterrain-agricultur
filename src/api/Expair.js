import Axios from 'axios'
import {URL} from  './Url'
import Cookies from 'js-cookie'
const token = Cookies.get('jwt')

const config = {
  headers:{
    'Authorization': `${token}`,
   
  }

 
 };
export  const getallpartenair = Axios.get(URL+"app/allpartenair")
export const postpartenair = (expair) =>Axios.post(URL+"app/addpartenair", expair)
export const deletepartenair = (id) => 
Axios.delete(URL+`app/delatepartenair/${id}`)