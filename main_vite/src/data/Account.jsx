import { createContext } from "react"

/*format
    login: false,
    firstname: 'sample',
    lastname: 'sample',
    profile: ''
*/
export const dt_account = ()=>{
    return []
}

export const Gbl_account = createContext(dt_account());
