import {GETTALLMESSAGE} from '../action/Type'
const init =  ""
export const boitemessage = (state = init , action) => {
if (action.type==GETTALLMESSAGE)
return action.paylod
else
return state
}
