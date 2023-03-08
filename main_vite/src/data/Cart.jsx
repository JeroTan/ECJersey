import { createContext } from "react"

/*format
[
    cartID: 0,
    totalItem: 10,
    itemID: 1,
    specification:{
        size: 'xl'
        color: 'red'
    }
]
    
*/
export const dt_cart = ()=>{
    return []
}

export const Gbl_cart = createContext(dt_cart());
