import { createContext } from "react"

/*format
[
    CartID:, 1,
    ID: 1,
    Color: red,
    Size: 1,
    Quantity: 10,
    Price: 100
]
    
*/
export const dt_checkout = ()=>{
    return []
}

export const Gbl_checkout = createContext(dt_checkout());
