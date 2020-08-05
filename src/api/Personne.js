import Axios from 'axios'
import {URL} from  './Url'
const config = {
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:3000/",
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
  };
export  const getalluser = Axios.get(URL+"app/getalluser")
export const getoneuserfromdb  = (id) => Axios.get(URL + `app/getoneuser/${id}`)
export const login = (email,pass) =>  Axios.post(URL+"app/loginuser", {
    email ,
    pass
},{withCredentials:true})
export const registeruser = (user) => Axios.post (URL + 'app/registeruser' , user )
export const updateuser = (user) => Axios.patch(URL + `app/updateuser/${user._id}` , user)
export const deleteuserbyadmin =(id,status)  => Axios.patch(URL + `deleteuserbyadmin/${id}` , {status})

