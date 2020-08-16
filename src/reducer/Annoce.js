import * as Annoce from '../action/Type'
const Ann = []


export const Annonce = (state = Ann, action) => {
   console.log("ok",action.payload) 
    switch (action.type) {
        case (Annoce.GETALLANNONCE):
            return action.payload
         case(Annoce.DELATEANNOCE):
         return state.filter(el => el._id !== action.payload)

        case (Annoce.GETONEANNONCE):
            return [action.payload]
        case (Annoce.SORTSTATE):
         return state.filter(el => el.typebien==action.payload)
        default:
            return state

    }
}
