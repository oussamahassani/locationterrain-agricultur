import * as Annoce from '../action/Type'
const init = ''

export const Annonce = ( state = init , action) => {

    switch(action.type){
    case (Annoce.GETALLANNONCE) :
        return   action.payload
        
    case(Annoce.GETONEANNONCE):
    return [action.payload]

    default:
    return []

    }
}