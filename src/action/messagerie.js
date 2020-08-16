import {
    sendemessage,getmessage,updatemessage,updatemessagedelate,updateconversation,
    updatemessagedraft} from '../api/messagerie'
import swal from "sweetalert";
import { GETTALLMESSAGE,GETALLANNONCEE,DELATEMESSAGE} from "./Type";
import {getallannoce} from '../api/Annoce'
import {URL} from '../api/Url'
import Axios from 'axios'
import Cookies from 'js-cookie'

/* send message action */
 export const sendemessages = (message) => { console.log(message)
    return  (dispatch) => 
    sendemessage(message)

     .then(res => {console.log("message",res.data);
        swal(res.data)})
     .catch(err => console.log(err))
     
 }
 /* get message action */
 export const getmessages = (id) => { return  (dispatch) => 
    getmessage(id)
     .then(res => {
    dispatch(dispatchmessages(res.data))})
     .catch(err => console.log(err))
 }
 export const dispatchmessages = paylod => ({
    type : GETTALLMESSAGE,
   paylod
})
 /* update statue read message */
 export const updatemessages = (id ) => { return (dispatch) => 
    updatemessage(id)
    .then (res => {console.log(res.data)})
    .catch(err => console.log (err))
}
export const updatemessagedrafts = (id) => { return (dispatch) => 
    updatemessagedraft(id)
    .then (res => {console.log(res) 
        swal("Good job!", res.data.msg, "success")
.then((value) => {
    window.location.reload(false);
});
 })
    .catch(err => console.log (err))
}
/* change delateted to true */
export const  delatemessage = (id) => {return (dispatch) => 
    updatemessagedelate(id)
    .then (res => {console.log(res)
        dispatch(delateonemessage(id))
        window.location.reload(false)})
    .catch(err => console.log (err))
}
 export const delateonemessage = paylod => ({
type:DELATEMESSAGE,
paylod

 })

 export const updatemessagesconversation = (id,donner) => { return (dispatch) => 
    updateconversation(id,donner)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
 }


export const getmessagesss = (id) => { return  async (dispatch) => {
    let promise1 = new Promise((resolve, reject) => {
        resolve(Axios.get(URL+"app/allannonce"))
     })
      let promise2 = new Promise((resolve, reject) => {
       resolve(Axios.get(URL + `app/getmessage/${id}`))
     }); 
     await  Promise.all([promise1, promise2]).then(values => {
          const dat1 = values[0].data;
          const dat2 =  values[1].data;
          
        dispatch(dispatchmessages(dat2))
      //  dispatch(getallanoncess(dat1))
     })}}
    /*  getallannoce

    .then(res => {console.log(res) 
    dispatch(getallanonces(res.data))
    getmessage(id)
    .then(res => {console.log(res.data)
        dispatch(dispatchmessages(res.data))})
        .catch(err => console.log(err))*/


  // Next, the middleware itself.
  
const multiAction = (action) => {
    console.log(action)
    return (dispatch) => action.map((fun,i) => dispatch(fun))
}
/*export const getallanoncess = paylod => ({
    type : GETALLANNONCEE,
    paylod
})   */
      
  
     
 