import { createContext } from "react"

/*format
[
    CartID:, 1,
    ID: 1,
    Quantity: 10,
    Price: 100
]
    
*/
export const dt_delivery = ()=>{
    return [];
}

export const Gbl_delivery = createContext(dt_delivery());
