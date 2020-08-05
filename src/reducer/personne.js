import * as Personne from '../action/Type'
import Cookies from 'js-cookie'
import jwt from 'jsonwebtoken'
const init = []

export const Personnes = (state = []  , action) => {
    switch(action.type) {
    case (Personne.GETALLPERSONNE):
       return  action.paylod
      case  (Personne.SIGNUPPERSONNE):
        return [...state , action.paylod]
        case (Personne.DELATEPERSONNE):
        return state.filter(el => el!= action.paylod)
        case (Personne.GETONEUSER):
        return [action.paylod]
        case(Personne.DECODETOKEN):
        let decode = jwt.decode(action.paylod);
        Cookies.set("typeuser",decode.typeuser)
        Cookies.set("_id",decode._id)
    default:
    return state
    }

}