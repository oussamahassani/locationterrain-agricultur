import {
    sendemessage,getmessage
} from '../api/messagerie'
import swal from "sweetalert";
import { GETTALLMESSAGE } from "./Type";

 export const sendemessages = (message) => { return  (dispatch) => 
    sendemessage(message)
     .then(res => {console.log(res.data);
        swal(res.data)})
     .catch(err => console.log(err))
 }

 export const getmessages = (id) => { return  (dispatch) => 
    getmessage(id)
     .then(res => {console.log(res.data)
    dispatch(dispatchmessages(res.data))})
     .catch(err => console.log(err))
 }

export const dispatchmessages = paylod => ({
    type : GETTALLMESSAGE,
    paylod
})
