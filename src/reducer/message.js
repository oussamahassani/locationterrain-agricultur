import {GETTALLMESSAGE,GETALLANNONCEE,DELATEMESSAGE} from '../action/Type'

const message =  []

export const boitemessage = (state = message , action) => {
if (action.type===GETTALLMESSAGE)

return  action.paylod

else if (action.type===DELATEMESSAGE)
{

return  state 
}
else
return state
}
/*{
    msg : state.msg.filter(el =>  el._id !==action.paylod)
}}*/
