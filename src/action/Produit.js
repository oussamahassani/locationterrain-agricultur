import * as  Produit from './Type'
import * as apiproduit from '../api/Produit'
import swal from "sweetalert";
export const getallproduitss =  () =>  {  return (dispatch) =>
    apiproduit.getallproduit
    .then(res => {console.log(res);
        dispatch(getallproduits(res.data))})
    .catch(err => console.log(err))
}
export const getallproduits = payload => ({
    type :Produit.GETALLProduit,
    payload
})
export const PostProduitt = (produit) => {  return (dispatch) =>
    apiproduit.postproduit(produit)
    .then(res => {console.log(res);
        swal("Good job!", res.data, "success")
        .then((value) => {
            window.location.reload(false)
          })
})
       
    .catch(err => console.log(err))
}
export const deleteproduitt = (id) => { return (dispatch) =>
    apiproduit.deleteproduit(id)
    .then(res => {console.log(res.data);
        dispatch(deleteproduit(id))})
    .catch(err => console.log(err))

}
export const deleteproduit = (payload) => ({
    type : Produit.DELATEProduit ,
    payload
})
export const updateproduitt = (produit) => { return  (dispatch) =>
    apiproduit.updateproduit(produit)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
}
 

export const getoneannonce = (id) => { return (dispatch) => 
    apiproduit.getonproduit(id)
    .then(res =>  {console.log(res.data);
      
    })
    .catch(err => console.log(err))

}

