import * as personne from './Type'
import * as apipersonne from '../api/Personne'
import Cookies from 'js-cookie'
import swal from "sweetalert";
export const Getalluser =  () =>  {  return (dispatch) =>
    apipersonne.getalluser
    .then(res =>  {console.log(res);
        swal("Good job!", "Votre donner donner a eté enregistrer", "success");

        dispatch(gettalluser(res.data))
    })
    .catch(err => console.log(err))
}
export const login = (email , pass) => {
     return (dispatch) => 
     apipersonne.login(email,pass)
        .then(res => { console.log('set-cookie header value', res.headers);
        if (Cookies.get("jwt"))
        window.location.href = "http://localhost:3000/admin";
        dispatch(decodetoken(Cookies.get("jwt")));
         ;})
    .catch(err => console.log(err))
}
export const signup = (newuser) =>  { return (dispatch) => 
    apipersonne.registeruser(newuser)
    .then(res => console.log(res))
    .catch(err => console.log(err) )

}
export const getoneuser = (id) => { return (dispatch) => 
    apipersonne.getoneuserfromdb(id)
    .then(res =>  {console.log(res.data);
        dispatch(updateuserreducer(res.data))
    })
    .catch(err => console.log(err))

}

export const deleteUser = (id , status) => { return (dispatch) =>
apipersonne.deleteuserbyadmin(id,status)
.then(res => console.log(res.data))
.catch(err => console.log(err))
}
export const UpdateUser = (user) => { return (dispatch) => 
    apipersonne.updateuser(user)
    .then( res => {console.log(res.data);
        swal(res.data);
        if (res.data !=="pass invalide")
        dispatch(updateuserreducer(res.data))
    })

}
export const decodetoken = (paylod) => ({
type : personne.DECODETOKEN,
paylod
})
 export const updateuserreducer =  (paylod) => ({
    type:personne.GETONEUSER,
    paylod
 })
export const gettalluser = (paylod) =>  ({
    type : personne.GETALLPERSONNE,
    paylod
})