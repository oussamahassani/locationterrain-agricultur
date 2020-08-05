import {RECUPEREMAL} from '../action/Type'

const init = ""

export const mailreducer = (state = init , action) => 
{
    if (action.type==RECUPEREMAL)
    return action.paylod
    else
    return state
}