
import Cookies from 'js-cookie'
import Axios from 'axios'
import {URL} from '../api/Url'
export const login = (info) => {
    Cookies.set("typeuser",info.typeuser)
    Cookies.set("_id",info._id)
   // window.location.href = "http://localhost:3000/admin";
}

export const logout = () => {
    const iduser =  Cookies.get('_id')
    console.log(iduser)
    Axios.delete(URL + "app/delateallproduit/"+iduser).
    then(res => console.log(res))
    Cookies.remove('typeuser')
    Cookies.remove('jwt')
    Cookies.remove('_id')
}

export const isLogin = () => {
    if( Cookies.get("jwt") &&  Cookies.get("_id"))
    return true
    else
    return false
}