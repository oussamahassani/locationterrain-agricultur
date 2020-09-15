import * as Annoce from '../action/Type'
let usernow = []
 export const curentnow = (state =usernow , action )  => {
console.log("curent user" ,action.paylod)
    if (action.type == Annoce.AUTHEUSER)
    {
        return  [ ...state , action.paylod]
    }
    else return state
 }