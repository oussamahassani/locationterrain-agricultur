import * as Produit from '../action/Type'
const Porod = []


export const Produits = (state = Porod, action) => {
    switch (action.type) {
        case (Produit.GETALLProduit):
            return action.payload
         case(Produit.DELATEProduit):
         return state.filter(el => el._id !== action.payload)

        default:
            return state

    }
}
