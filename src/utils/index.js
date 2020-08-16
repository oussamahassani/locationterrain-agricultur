
import Cookies from 'js-cookie'
export const login = (info) => {
    Cookies.set("typeuser",info.typeuser)
    Cookies.set("_id",info._id)
   // window.location.href = "http://localhost:3000/admin";
}

export const logout = () => {
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