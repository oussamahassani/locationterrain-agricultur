import Axios from 'axios'
import {URL} from  './Url'
import Cookies from 'js-cookie'
const token = Cookies.get('jwt')
const config = {
    headers:{
      'Authorization': `${token}`,
     
    }
}

export  const getallannoce = Axios.get(URL+"app/allannonce")