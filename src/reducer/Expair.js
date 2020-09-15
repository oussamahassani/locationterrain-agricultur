import * as expaire from '../action/Type'
const expr = []

 export const expaires = (state = expr , action) => {
     console.log("expair",action.paylod)
if (action.type == expaire.GETALLEXPAIR)
return action.paylod
else if(action.type == expaire.DELETEEXPAIR)
return state.filter( el => el._id !==action.paylod)
else return state

}