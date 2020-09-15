import *  as Pannier from './Type'
import * as apipannier from '../api/panier'

export const getallproduitfrompannier = () => { return (dispatch) => 
    apipannier.getallproduit
    .then(res => {console.log(res.data) 
        dispatch(getallpanier(res.data))})
    .catch(err =>{ console.log(err)} )
}
export const getallpanier = (payload) => ({
type: Pannier.GETALLFROMPANIER ,
payload
})

export const postnewproducttopannier = (produit) => { return (dispatch) => 
    apipannier.posttopanier(produit)
    .then(res => {console.log(res.data)
        dispatch(addnewproduit(produit))})
    .catch( err => console.log(err))

}
export const addnewproduit = (payload) => ({
    type:Pannier.ADDNEWPRODUIT,
    payload
})
export const delateoneproduitfrompannier = (id) => {return (dispatch) => 
apipannier.delateonefrompannier(id)
.then(res => {console.log(res.data)
  dispatch(deleteone(id))})
}
export const deleteone = (payload) => ({
    type: Pannier.DELATEPRODUITFROMPANIER ,
    payload
    })
