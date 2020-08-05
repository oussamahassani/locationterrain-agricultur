import * as  annonce from './Type'
import * as apiannonce from '../api/Annoce'
import swal from "sweetalert";
export const Getanonces =  () =>  {  return (dispatch) =>
    apiannonce.getallannoce
    .then(res => {console.log(res);
        dispatch(getallanonces(res.data))})
    .catch(err => console.log(err))
}
export const postannoce = (annonce) => {  return (dispatch) =>
    apiannonce.postannonce(annonce)
    .then(res => {console.log(res)
        dispatch(postnewannonce(annonce))
        swal("Good job!", res.data, "success"); })
    .catch(err => console.log(err))
}
export const delateannocee = (id) => { return (dispatch) =>
    apiannonce.deleteannoce(id)
    .then(res => dispatch(delateannoce(id)))
    .catch(err => console.log(err))

}
export const updateannoces = (annonce) => { return  (dispatch) =>
    apiannonce.updateannonce(annonce)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
}
 /* favorite annonce */
export const addtofavoriteannoce = (annonce) => {
    return (dispatch) => apiannonce.sedtofavorite(annonce)
    .then(res =>console.log(res.data) )
    .catch(err => console.log(err) )
}

export const showallfavoriteannonce = () => {
    return (dispatch) => apiannonce.showallfavorites
    .then(res => {console.log(res.data)
        dispatch(getallfavorite(res.data)) })
    .catch(err => console.log(err))
}
export const deletefromfavorite = (id) => {
    return (dispatch) => apiannonce.deletefromfavorite(id)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
}
export const getallfavorite = payload => ({
    type :annonce.GETALLFAVORITE,
    payload
})
/* end favorite*/
export const getallanonces = payload => ({
    type :annonce.GETALLANNONCE,
    payload
})
export const postnewannonce = payload => ({
    type :annonce.POSTANNONCE,
    payload
})
export const updateannoce = payload => ({
    type :annonce.UPDATEANNAONCE,
    payload
})
export const delateannoce = payload => ({
    type : annonce.DELATEANNOCE,
    payload
})


export const getoneannonce = (id) => { return (dispatch) => 
    apiannonce.getoneannonce(id)
    .then(res =>  {console.log(res.data);
        dispatch(updateuserreducer(res.data))
    })
    .catch(err => console.log(err))

}

export const updateuserreducer =  (payload) => ({
    type:annonce.GETONEANNONCE,
    payload
 })