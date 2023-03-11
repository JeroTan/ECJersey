import { createContext } from "react"

/*format
[
    ID: 1,
    Quantity: 10,
    Size: 'xl'
    Color: 'red'
]
    
*/
export const dt_cart = ()=>{
    return []
}

export const Gbl_cart = createContext(dt_cart());
