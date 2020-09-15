import * as  Expair from './Type'
import * as apiExpair from '../api/Expair'
import swal from "sweetalert";
export const Getpartenair =  () =>  {  return (dispatch) =>
    apiExpair.getallpartenair
    .then(res => {console.log("expair", res.data);
       dispatch(getallexpair(res.data))
    
    })
    .catch(err => console.log(err))
}
export const postpartenair = (partenair) => {  return (dispatch) =>
    apiExpair.postpartenair(partenair)
    .then(res => {console.log(res)
      /*  dispatch(postnewannonce(partenair))*/
swal("Good job!", res.data, "success")
    .then(value => window.location.reload())})
    .catch(err => console.log(err))
}
export const delatepartenair = (id) => { return (dispatch) =>
    apiExpair.deletepartenair(id)
    .then(res => {console.log(res.data)
        
        dispatch(delateexpair(id))
    }
        )
    .catch(err => console.log(err))

}
export const getallexpair = (paylod) => ({
type:Expair.GETALLEXPAIR,
paylod
})
export const delateexpair = (paylod) => ({
    type: Expair.DELETEEXPAIR,
    paylod
})
