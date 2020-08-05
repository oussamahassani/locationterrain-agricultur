import * as Annoce from '../action/Type'
const init = ""

export const Favorite = ( state = init , action) => {

    switch(action.type){
    case (Annoce.GETALLFAVORITE) :
        return action.payload
    
    default:
    return []

    }
}