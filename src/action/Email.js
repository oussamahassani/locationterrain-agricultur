import {sendemail,sendemailtoproprietaire,recupereremaill} from '../api/email'
import {RECUPEREMAL} from './Type'
import swal from "sweetalert";
 export const sendemaill = (email) => { return  (dispatch) => 
   sendemail(email)
    .then(res => {console.log(res.data);
      if (res.data.msg ="fail")
      swal("error!", "votre message ne peut pas envoiyer merci de réessayer plus tard!", "error");
      else if (res.data.msg="success")
      swal("Good job!", "votre email eté envoiyer avec suceé", "success");
    })
    .catch(err => console.log(err))
}
export const sendemailtoproprietairee = (email) => { return (dispatch) => sendemailtoproprietaire(email)
.then(res =>  {
  if (res.data.msg ="fail")
  swal("error!", "votre message ne peut pas envoiyer merci de réessayer plus tard!", "error");
  else if (res.data.msg="success")
  swal("Good job!", "votre email eté envoiyer avec suceé", "success");


})
.catch(err => console.log(err))
}

export const recupereremail = (id) => {return (dispatch) => 
  recupereremaill(id) 
  .then(res =>  {console.log(res.data)
    dispatch(mailreducer(res.data))})
  .catch(err => console.log(err))
}

export const  mailreducer  = ( paylod) => ({
  type : RECUPEREMAL ,
  paylod
})