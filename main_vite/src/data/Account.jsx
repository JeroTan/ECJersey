import { createContext } from "react"
import App from '../App.jsx';

/*format
    login: false,
    firstname: 'sample',
    lastname: 'sample',
    age: 0,
    profile: ''
*/
export const dt_account = ()=>{
    return []
}

export const Gbl_account = createContext(dt_account());
