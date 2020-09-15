import * as Produit from '../action/Type'
const panni = []


export const Pannier = (state = panni, action) => {
    switch (action.type) {
        case (Produit.GETALLFROMPANIER):
            return action.payload
         case(Produit.DELATEPRODUITFROMPANIER):
         return state.filter(el => el._id !== action.payload)
         case (Produit.ADDNEWPRODUIT):
             return [...state , action.payload]

        default:
            return state

    }
}
